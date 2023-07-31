/** @jsxImportSource @emotion/react */
import {
  Alert,
  Box,
  Button,
  Container,
  css,
  Divider,
  Snackbar,
  Stack,
  TextField
} from '@mui/material';
import { StyledTypography } from '../../../shared/components/atoms';
import React, { useCallback, useRef, useState } from 'react';
import { ROUTES } from '../../../shared/constants/routes';
import { useNavigate } from 'react-router';
import Logo from '../../../shared/assets/img/logo';
import { useAtom } from 'jotai';
import { addTurfDataAtom } from '../../../shared/states/add-turf';
import { toSentenceCase } from '../../../shared/utils/text-helper';
import TimeSlotsForm from './add-slot';
import addTurf from '../requests/add-turf';
import { useResetAtom } from 'jotai/utils';
import {
  searchResultsAtom,
  searchResultsQueryAtom
} from '../../../shared/states/search';
import { CardView } from '../../home/components/search-results';
import {
  GetTurfsRequestPaginationParam,
  TurfData
} from '../../home/typings/request';
import getTurfsList from '../../home/requests/get-turfs-list';
import usePaginatedQuery from '../../../shared/hooks/use-paginated-query';
import Loader from '../../../shared/components/molecules/loader';
import { LOADING } from '../../../shared/constants';
import { AddTurfRequest } from '../typings/request';
import dayjs from 'dayjs';
import editTurf from '../requests/edit-turf';

const AddTurfScreen = () => {
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
  const [addEditTurf, setAddEditTurf] = useState<string | null>(null);
  const [turfData, setTurfData] = useAtom(addTurfDataAtom);
  const resetTurfData = useResetAtom(addTurfDataAtom);
  const [submitOpen, setSubmitOpen] = useState(true);
  const [imageUrl, setImageUrl] = useState(turfData.imgUrl);
  const [turfId, setTurfId] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const uploadInputRef = useRef<HTMLInputElement | null>(null);

  const getter = useCallback(
    async (paginationData?: GetTurfsRequestPaginationParam) => {
      const { nextPaginationParam } = paginationData ?? {
        nextPaginationParam: undefined
      };

      const data = await getTurfsList({
        search: '',
        nextPaginationParam
      });

      setSearchResults([...data.turfs]);
      return {
        data: data.turfs,
        paginationData: {
          nextPaginationParam: data.nextPaginationParam,
          hasMore: data.hasMore
        }
      };
    },
    [setSearchResults]
  );

  const { requestData: turfsList } = usePaginatedQuery<
    TurfData,
    GetTurfsRequestPaginationParam
  >({
    getter,
    requestAtom: searchResultsQueryAtom
  });

  const handleTextChange = (e: { target: { name: string; value: string } }) => {
    setTurfData((old) => ({
      ...old,
      [e.target.name]: e.target.value
    }));
  };

  const handleGamesTextChange = (e: {
    target: { name: string; value: string };
  }) => {
    const games = e.target.value
      .split(',')
      .map((game) => toSentenceCase(game.trim()));
    setTurfData((old) => ({
      ...old,
      games
    }));
  };

  const convertTimeToDate = (time: string) => {
    let now = dayjs(); // get the current date and time using dayjs
    return dayjs(
      now.format('YYYY-MM-DD') + ' ' + time,
      'YYYY-MM-DD h:mm:ss A'
    ).toDate();
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitOpen(false);
    if (!selectedFile && !imageUrl) {
      showAlert('Either image url or an image file must be selected');
    }
    if (addEditTurf === 'add') {
      await addTurf({
        imgUrl: imageUrl,
        file: selectedFile ?? undefined,
        ...turfData
      }).catch((err) => showAlert(err.message));
    } else if (addEditTurf === 'edit') {
      await editTurf({
        id: turfId,
        imgUrl: imageUrl,
        file: selectedFile ?? undefined,
        ...turfData
      }).catch((err) => showAlert(err.message));
    }
    resetTurfData();
    setImageUrl('');
    setSubmitOpen(true);
    setAddEditTurf(null);
    await getter();
  };

  const showAlert = (message: string) => {
    setAlertMessage(message);
  };

  return !!addEditTurf ? (
    <div
      css={css({
        backgroundColor: 'white'
      })}
    >
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={!!alertMessage}
        onClose={() => setAlertMessage(null)}
      >
        <Alert severity="error">{alertMessage}</Alert>
      </Snackbar>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '10px'
        })}
      >
        <div
          css={css({
            margin: '30px 30px 0',
            cursor: 'pointer',
            '@media (max-width: 768px)': {
              margin: '5% auto',
              position: 'static'
            }
          })}
          onClick={() => navigate(ROUTES.HOME)}
        >
          <Logo width={50} color={'#4758D6'} />
        </div>
        <Box css={css({})}>
          <StyledTypography
            variant={'h3'}
            fontWeight={'bolder'}
            margin={'5% 0 0'}
            textAlign={'center'}
            css={css({
              '@media (max-width: 768px)': {
                width: '100%',
                fontSize: '30px'
              }
            })}
          >
            ADD NEW TURF
          </StyledTypography>
          <Divider
            variant="middle"
            css={css({
              backgroundColor: '#000000',
              '@media (max-width: 768px)': {}
            })}
          />
          <Stack
            css={css({
              margin: '20px 0',
              gap: '10px',
              '@media (max-width: 768px)': {
                margin: '10% 0',
                textAlign: 'center',
                gap: '20px'
              }
            })}
          >
            <TextField
              placeholder={'Name'}
              name={'name'}
              value={turfData.name}
              onChange={handleTextChange}
            />
            <TextField
              placeholder={'Area'}
              name={'area'}
              value={turfData.area}
              onChange={handleTextChange}
            />
            <TextField
              placeholder={'Address'}
              name={'address'}
              value={turfData.address}
              onChange={handleTextChange}
            />
            {addEditTurf !== 'edit' && (
              <>
                <TextField
                  placeholder={'location Url'}
                  name={'locationUrl'}
                  value={turfData.locationUrl}
                  onChange={handleTextChange}
                />
                <TextField
                  placeholder={'Owner Name'}
                  name={'ownerName'}
                  value={turfData.ownerName}
                  onChange={handleTextChange}
                />
                <TextField
                  placeholder={'Owner Phone'}
                  name={'ownerPhone'}
                  value={turfData.ownerPhone}
                  onChange={handleTextChange}
                />
              </>
            )}

            <div
              css={css({
                display: 'flex',
                flexDirection: 'row',
                gap: '10px'
              })}
            >
              <TextField
                fullWidth
                placeholder={'Image Url'}
                name={'imgUrl'}
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                  setSelectedFile(null);
                  setTurfData((old) => ({
                    ...old,
                    imgUrl: e.target.value
                  }));
                }}
              />
              <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target?.files?.length) {
                    setSelectedFile(e.target?.files[0]);
                    setImageUrl(e.target?.files[0].name ?? '');
                  }
                }}
              />
              <Button
                onClick={() => {
                  uploadInputRef.current && uploadInputRef.current.click();
                }}
                variant="contained"
              >
                Upload
              </Button>
            </div>
            <TextField
              placeholder={'Games'}
              name={'games'}
              value={turfData.games}
              onChange={handleGamesTextChange}
              helperText={'Please enter comma seperated Games'}
            />
            <TimeSlotsForm />
            <TextField
              placeholder={'Secret'}
              name={'secret'}
              value={turfData.secret}
              onChange={handleTextChange}
            />
            <Button
              disabled={
                !submitOpen ||
                (addEditTurf === 'add' &&
                  !Object.values(turfData).every(Boolean)) ||
                !turfData.slots.length ||
                !turfData.secret
              }
              onClick={handleSubmit}
              css={css({
                marginTop: '20px'
              })}
              variant={'contained'}
            >
              {submitOpen ? 'Submit' : 'Processing'}
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  ) : (
    <div
      css={css({
        backgroundColor: 'white'
      })}
    >
      {turfsList.loading || turfsList.refreshing ? (
        <Loader secondary={LOADING} />
      ) : (
        <>
          <div
            css={css({
              display: 'flex'
            })}
          >
            <Button
              variant={'contained'}
              size={'large'}
              css={css({
                margin: '10px auto'
              })}
              onClick={() => {
                setAddEditTurf('add');
                setTurfData({
                  name: '',
                  area: '',
                  address: '',
                  locationUrl: '',
                  ownerPhone: '',
                  ownerName: '',
                  slots: [],
                  games: [],
                  secret: ''
                });
              }}
            >
              Add New Turf
            </Button>
          </div>
          <Container
            css={css({
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'space-evenly',
              '@media (max-width: 768px)': {
                justifyContent: 'center'
              }
            })}
          >
            {searchResults?.map((turf, index) => {
              return (
                <CardView
                  data={turf}
                  key={`${turf.id}_${index}`}
                  onClick={() => {
                    setAddEditTurf('edit');
                    const { id, slots, ...rest } = turf;
                    const formattedSlots = Object.entries(slots).reduce<
                      AddTurfRequest['slots']
                    >((acc, [day, values]) => {
                      const daySlots = values.map((value) => {
                        return {
                          day,
                          startTime: convertTimeToDate(
                            value.startTime
                          ).toString(),
                          endTime: convertTimeToDate(value.endTime).toString(),
                          cost: value.cost.toString()
                        };
                      });
                      acc.push(...daySlots);
                      return acc;
                    }, []);
                    setImageUrl(rest.imgUrl);
                    setTurfId(id);
                    setTurfData({
                      ...rest,
                      secret: '',
                      ownerPhone: '',
                      ownerName: '',
                      locationUrl: '',
                      slots: formattedSlots
                    });
                  }}
                />
              );
            })}
          </Container>
        </>
      )}
    </div>
  );
};

export default AddTurfScreen;
