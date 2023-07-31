/** @jsxImportSource @emotion/react */

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  css,
  Dialog,
  Divider,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tooltip,
  Typography
} from '@mui/material';
import StyledModal from '../../../../shared/components/molecules/modal';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  bookTurfScreenAtom,
  searchRequestAtom,
  searchResultsAtom,
  searchResultScreenAtom,
  searchResultsQueryAtom,
  selectedTurfDataAtom
} from '../../../../shared/states/search';
import { StyledTypography } from '../../../../shared/components/atoms';
import ClearIcon from '@mui/icons-material/Clear';
import { useCallback, useEffect, useRef } from 'react';
import {
  GetTurfsRequestPaginationParam,
  TurfData
} from '../../typings/request';
import getTurfsList from '../../requests/get-turfs-list';
import usePaginatedQuery from '../../../../shared/hooks/use-paginated-query';
import Loader from '../../../../shared/components/molecules/loader';
import { LOADING } from '../../../../shared/constants';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { formatTimeForTurf } from '../../../../shared/utils/date-time';
import { whatsappTextFormatterForTurfAvailability } from '../../../../shared/utils/whatsapp-text';

export const CardView = ({
  data,
  onClick
}: {
  data: TurfData;
  onClick: () => void;
}) => {
  const searchResultScreen = useAtomValue(searchResultScreenAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [searchResultScreen]);

  return (
    <Card
      variant={'elevation'}
      elevation={5}
      css={css({
        display: 'block',
        margin: '0.5rem 0',
        borderRadius: '20px',
        width: '32%',
        height: '270px',
        backgroundColor: '#4455DE',
        '@media (max-width: 768px)': {
          width: '300px'
        }
      })}
      onClick={onClick}
    >
      <CardMedia
        css={css({
          margin: '10px',
          height: '70%',
          borderRadius: '5px',
          objectFit: 'cover'
        })}
        image={data.imgUrl}
        title="Turf"
      />
      <CardContent
        css={css({
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0 10px'
        })}
      >
        <Tooltip enterTouchDelay={100} title={data.name}>
          <Typography
            css={css({
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%'
            })}
            variant="h6"
            color="white"
            margin={0}
            onTouchStart={(e) => {
              e.currentTarget.classList.add('touch-active');
            }}
            onTouchEnd={(e) => {
              e.currentTarget.classList.remove('touch-active');
            }}
          >
            {data.name}
          </Typography>
        </Tooltip>
        <Typography variant="body2" color="white">
          {data.area}
        </Typography>
      </CardContent>
    </Card>
  );
};

const SelectedTurfCard = () => {
  const [searchResultScreen, setSearchResultScreen] = useAtom(
    searchResultScreenAtom
  );
  const [selectedTurfData, setSelectedTurfData] = useAtom(selectedTurfDataAtom);
  const [bookTurfScreen, setBookTurfScreen] = useAtom(bookTurfScreenAtom);

  const timings = Array.from(
    new Set(
      Object.values(selectedTurfData.slots)
        .flat()
        .map((slot) => formatTimeForTurf(slot.startTime, slot.endTime))
    )
  );
  let timingsString = timings.join('\n');
  if (timings.length > 1) {
    timingsString = [...timings, '...'].slice(0, 1).join('\n');
  }
  const prices = Object.values(selectedTurfData.slots)
    .flat()
    .map((slot) => slot.cost);
  const maxPrice = Math.max(...prices).toFixed(2);
  const minPrice = Math.min(...prices).toFixed(2);
  return (
    <>
      <Card
        key={`${selectedTurfData.id}_selected`}
        variant={'elevation'}
        elevation={5}
        css={css({
          display: 'block',
          borderRadius: '20px',
          width: '400px',
          backgroundColor: '#252525',
          margin: '20px'
        })}
      >
        <ClearIcon
          css={css({
            cursor: 'pointer',
            float: 'right',
            width: '20px',
            marginTop: '12px',
            marginRight: '15px',
            color: 'white'
          })}
          onClick={() => {
            setSearchResultScreen({
              ...searchResultScreen,
              cardScreen: false
            });
            setBookTurfScreen({
              slotSelected: null,
              daySelected: null,
              wantReferee: false,
              wantVideoRecording: false
            });
          }}
        />
        {selectedTurfData.bookScreen ? (
          <>
            <ArrowBackIosNewOutlinedIcon
              css={css({
                cursor: 'pointer',
                float: 'left',
                width: '20px',
                marginTop: '12px',
                marginLeft: '15px',
                color: 'white'
              })}
              onClick={() =>
                setSelectedTurfData((oldData) => ({
                  ...oldData,
                  bookScreen: false
                }))
              }
            />
            <CardContent
              css={css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0px',
                marginTop: '10%',
                width: '100%',
                '@media (max-width: 768px)': {
                  marginTop: '15%'
                }
              })}
            >
              <div
                css={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  width: '100%',
                  padding: '0 10px'
                })}
              >
                <StyledTypography
                  variant={'h6'}
                  color={'#FFFFFF'}
                  fontWeight={'bold'}
                  css={css({
                    flex: 2,
                    fontSize: 'calc(0.02 * 100vh)'
                  })}
                >
                  {selectedTurfData.name}
                </StyledTypography>
                <Divider
                  variant={'middle'}
                  css={css({
                    backgroundColor: 'white',
                    width: '2px',
                    marginInline: '5px',
                    height: '15px'
                  })}
                  orientation="vertical"
                  flexItem
                />
                <StyledTypography
                  flex={1}
                  variant={'h6'}
                  color={'#0CB85D'}
                  fontWeight={'bold'}
                  css={css({
                    flex: 1,
                    fontSize: 'calc(0.02 * 100vh)'
                  })}
                >
                  {selectedTurfData.area}
                </StyledTypography>
              </div>
              {/*<Divider*/}
              {/*  css={css({*/}
              {/*    backgroundColor: 'white',*/}
              {/*    width: '60%',*/}
              {/*    margin: '5px 0'*/}
              {/*  })}*/}
              {/*/>*/}
              {/*<StyledTypography*/}
              {/*  variant={'caption'}*/}
              {/*  color={'#FFFFFF'}*/}
              {/*  fontWeight={'bold'}*/}
              {/*>*/}
              {/*  Address:*/}
              {/*</StyledTypography>*/}
              {/*<StyledTypography*/}
              {/*  align={'center'}*/}
              {/*  variant={'caption'}*/}
              {/*  color={'#FFFFFF'}*/}
              {/*  css={css({*/}
              {/*    fontSize: '10px',*/}
              {/*    fontStyle: 'italic',*/}
              {/*    lineHeight: '1.2'*/}
              {/*  })}*/}
              {/*  padding={'0 5px'}*/}
              {/*>*/}
              {/*  {selectedTurfData.address}*/}
              {/*</StyledTypography>*/}
              <Divider
                css={css({
                  backgroundColor: '#0CB85D',
                  width: '90%',
                  margin: '10px 0'
                })}
              />

              <Box
                css={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  width: '80%',
                  marginTop: '5%'
                })}
              >
                <FormControl>
                  <InputLabel
                    id="select-day-label"
                    css={css({
                      color: 'lightgray'
                    })}
                  >
                    Day
                  </InputLabel>
                  <Select
                    labelId={'select-day-label'}
                    label={'Day'}
                    css={css({
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'lightgray'
                      }
                    })}
                    value={bookTurfScreen.daySelected}
                    onChange={(e) => {
                      setBookTurfScreen((oldData) => ({
                        ...oldData,
                        daySelected: e.target.value,
                        slotSelected: null
                      }));
                    }}
                  >
                    {Object.keys(selectedTurfData.slots).map((day) => (
                      <MenuItem value={day}>{day}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel
                    id="select-time-slot-label"
                    css={css({
                      color: 'lightgray'
                    })}
                  >
                    Time Slot
                  </InputLabel>
                  <Select
                    labelId={'select-time-slot-label'}
                    label={'Time Slot'}
                    css={css({
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'lightgray'
                      }
                    })}
                    disabled={!bookTurfScreen.daySelected}
                    value={bookTurfScreen.slotSelected}
                    onChange={(e) => {
                      setBookTurfScreen((oldData) => ({
                        ...oldData,
                        slotSelected: e.target.value
                      }));
                    }}
                  >
                    {bookTurfScreen.daySelected &&
                      selectedTurfData.slots[bookTurfScreen.daySelected].map(
                        (slot) => (
                          <MenuItem
                            value={formatTimeForTurf(
                              slot.startTime,
                              slot.endTime
                            )}
                          >
                            {formatTimeForTurf(slot.startTime, slot.endTime)}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    defaultChecked
                    control={<Checkbox checked />}
                    label={
                      <Typography css={css({ color: 'white' })}>
                        Do you want Bibs?
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    defaultChecked
                    control={<Checkbox checked />}
                    label={
                      <Typography css={css({ color: 'white' })}>
                        Do you want Water Bottles?
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    defaultChecked
                    control={
                      <Checkbox
                        checked={bookTurfScreen.wantReferee}
                        onChange={() =>
                          setBookTurfScreen((old) => ({
                            ...old,
                            wantReferee: !old.wantReferee
                          }))
                        }
                      />
                    }
                    label={
                      <Typography css={css({ color: 'white' })}>
                        Do you want a Professional Referee or Umpire?
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    defaultChecked
                    control={
                      <Checkbox
                        checked={bookTurfScreen.wantVideoRecording}
                        onChange={() =>
                          setBookTurfScreen((old) => ({
                            ...old,
                            wantVideoRecording: !old.wantVideoRecording
                          }))
                        }
                      />
                    }
                    label={
                      <Typography css={css({ color: 'white' })}>
                        Do you want to livestream your gameplay on JioTV?
                      </Typography>
                    }
                  />
                </FormControl>
                <Button
                  variant={'contained'}
                  css={css({
                    backgroundColor: '#0CB85D',
                    color: '#FFFFFF',
                    borderRadius: '20px'
                  })}
                  disabled={
                    !bookTurfScreen.daySelected || !bookTurfScreen.slotSelected
                  }
                  onClick={() => {
                    bookTurfScreen.daySelected &&
                      bookTurfScreen.slotSelected &&
                      window.open(
                        `https://wa.me/+917038896140?text=${encodeURIComponent(
                          whatsappTextFormatterForTurfAvailability({
                            day: bookTurfScreen.daySelected,
                            time: bookTurfScreen.slotSelected,
                            turfData: selectedTurfData,
                            wantReferee: bookTurfScreen.wantReferee,
                            wantVideoRecording:
                              bookTurfScreen.wantVideoRecording
                          })
                        )}`,
                        'popUpWindow',
                        'height=400,width=600,left=10,top=10,,scrollbars=yes,menubar=no'
                      );
                    return false;
                  }}
                >
                  Enquire Availability
                </Button>
              </Box>
              {selectedTurfData.games?.length ? (
                <div
                  css={css({
                    margin: '10px'
                  })}
                >
                  <Typography
                    variant={'caption'}
                    color={'#FFFFFF'}
                    fontWeight={'bold'}
                    marginTop={'10px'}
                  >
                    {`Games offered: ${selectedTurfData.games.join(', ')}`}
                  </Typography>
                </div>
              ) : (
                ''
              )}
            </CardContent>
          </>
        ) : (
          <>
            <CardMedia
              css={css({
                margin: '10px',
                height: '225px',
                borderRadius: 'inherit',
                objectFit: 'cover'
              })}
              image={selectedTurfData.imgUrl}
              title="Turf"
            />
            <CardContent
              css={css({
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px'
              })}
            >
              <div
                css={css({
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  width: '100%',
                  padding: '0 10px'
                })}
              >
                <StyledTypography
                  flex={2}
                  variant={'subtitle1'}
                  color={'#FFFFFF'}
                  fontWeight={'bold'}
                >
                  {selectedTurfData.name}
                </StyledTypography>
                <Divider
                  variant={'middle'}
                  css={css({
                    backgroundColor: 'white',
                    width: '2px',
                    marginInline: '5px'
                  })}
                  orientation="vertical"
                  flexItem
                />
                <StyledTypography
                  flex={1}
                  variant={'subtitle1'}
                  color={'#0CB85D'}
                  fontWeight={'bold'}
                >
                  {selectedTurfData.area}
                </StyledTypography>
              </div>
              <Divider
                css={css({
                  backgroundColor: 'white',
                  width: '60%',
                  margin: '5px 0'
                })}
              />
              <StyledTypography
                variant={'caption'}
                color={'#FFFFFF'}
                fontWeight={'bold'}
              >
                Address:
              </StyledTypography>
              <StyledTypography
                align={'center'}
                variant={'caption'}
                color={'#FFFFFF'}
                css={css({
                  fontSize: '10px',
                  fontStyle: 'italic',
                  lineHeight: '1.2'
                })}
                padding={'0 5px'}
              >
                {selectedTurfData.address}
              </StyledTypography>
              <Divider
                css={css({
                  backgroundColor: '#0CB85D',
                  width: '90%',
                  margin: '10px 0'
                })}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={1}
                css={css({
                  gap: '10px',
                  margin: '0 20px',
                  '@media (max-width: 768px)': {
                    margin: '0 10px',
                    gap: 0
                  }
                })}
                divider={
                  <Divider
                    variant={'middle'}
                    css={css({
                      backgroundColor: 'white',
                      width: '2px'
                    })}
                    orientation="vertical"
                    flexItem
                  />
                }
              >
                <Box>
                  <StyledTypography
                    variant={'subtitle1'}
                    color={'#0CB85D'}
                    fontWeight={'bold'}
                    css={css({
                      '@media (max-width: 768px)': {
                        fontSize: '15px'
                      }
                    })}
                  >
                    Timings
                  </StyledTypography>
                  <StyledTypography
                    color={'#FFFFFF'}
                    fontSize={10}
                    css={css({
                      '@media (max-width: 768px)': {
                        fontSize: '8px'
                      }
                    })}
                  >
                    {timingsString}
                  </StyledTypography>
                </Box>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems="center"
                  justifyContent="center"
                  textAlign={'center'}
                >
                  <StyledTypography
                    variant={'subtitle1'}
                    color={'#0CB85D'}
                    fontWeight={'bold'}
                    css={css({
                      '@media (max-width: 768px)': {
                        fontSize: '15px',
                        lineHeight: '1'
                      }
                    })}
                  >
                    Booking Prices
                  </StyledTypography>
                  <StyledTypography
                    variant={'body2'}
                    color={'#FFFFFF'}
                    fontWeight={'bold'}
                    marginTop={'10px'}
                  >
                    ₹
                    {maxPrice === minPrice
                      ? ` ${maxPrice}`
                      : ` ${minPrice} to ${maxPrice}`}{' '}
                    per Hour
                  </StyledTypography>
                </Box>
                <Box alignSelf="center">
                  <Button
                    variant={'contained'}
                    css={css({
                      backgroundColor: '#0CB85D',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      padding: '5px 20px',
                      '@media (max-width: 768px)': {
                        fontSize: '10px'
                      }
                    })}
                    onClick={() =>
                      setSelectedTurfData((old) => ({
                        ...old,
                        bookScreen: true
                      }))
                    }
                  >
                    BOOK
                  </Button>
                </Box>
              </Stack>
              {selectedTurfData.games?.length ? (
                <div css={css({})}>
                  <Typography
                    variant={'caption'}
                    color={'#FFFFFF'}
                    fontWeight={'bold'}
                    marginTop={'10px'}
                  >
                    {`Games offered: ${selectedTurfData.games.join(', ')}`}
                  </Typography>
                </div>
              ) : (
                ''
              )}
            </CardContent>
          </>
        )}
      </Card>
    </>
  );
};

const SearchResults = () => {
  const [searchText, setSearchText] = useAtom(searchRequestAtom);
  const [searchResultScreen, setSearchResultScreen] = useAtom(
    searchResultScreenAtom
  );
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
  const setSelectedTurfData = useSetAtom(selectedTurfDataAtom);

  const lastSearchRef = useRef('');

  const getter = useCallback(
    async (paginationData?: GetTurfsRequestPaginationParam) => {
      const { nextPaginationParam } = paginationData ?? {
        nextPaginationParam: undefined
      };

      const data = await getTurfsList({
        search: searchText,
        nextPaginationParam
      });

      setSearchResults((oldData) => [...oldData, ...data.turfs]);
      return {
        data: data.turfs,
        paginationData: {
          nextPaginationParam: data.nextPaginationParam,
          hasMore: data.hasMore
        }
      };
    },
    [searchText, setSearchResults]
  );

  const { requestData: turfsList, refresh } = usePaginatedQuery<
    TurfData,
    GetTurfsRequestPaginationParam
  >({
    getter,
    requestAtom: searchResultsQueryAtom
  });

  useEffect(() => {
    const atomId = `${searchText}`;
    if (lastSearchRef.current && lastSearchRef.current !== atomId) {
      refresh().then();
      setSearchResults([]);
    }

    lastSearchRef.current = atomId;
  }, [searchText, refresh, setSearchResults]);

  return (
    <StyledModal
      open={searchResultScreen.searchScreen}
      css={css({
        position: 'absolute',
        top: '10%',
        height: '90%',
        '@media (max-width: 768px)': {
          width: '90%',
          margin: '0 auto'
        }
      })}
    >
      <Paper
        css={css({
          backgroundColor: 'rgba(22,22,22,0.93)',
          height: '100%',
          position: 'relative'
        })}
      >
        <ClearIcon
          css={css({
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            right: 0,
            margin: '12px 15px',
            color: 'rgb(255,255,255)',
            alignSelf: 'flex-start',
            justifySelf: 'flex-end'
          })}
          onClick={() => {
            setSearchResultScreen({
              ...searchResultScreen,
              searchScreen: false
            });
            setSearchText('');
            setSearchResults([]);
          }}
        />
        <Box
          display="flex"
          flexDirection={'row'}
          justifyContent="center"
          alignItems="center"
          padding={'20px 0 5px'}
          css={css({
            '@media (max-width: 768px)': {
              flexDirection: 'column'
            }
          })}
        >
          <StyledTypography
            variant={'h6'}
            color={'#0CB85D'}
            css={css({
              '@media (max-width: 768px)': {
                fontSize: '15px'
              }
            })}
          >
            {searchText
              ? 'Turfs in the area :'
              : searchResultScreen.isNearbyQuery
              ? 'Turfs nearby to your location'
              : 'Turfs'}
          </StyledTypography>
          <StyledTypography
            variant={'h6'}
            color={'#ffffff'}
            css={css({
              '@media (max-width: 768px)': {
                fontSize: '17px'
              }
            })}
          >
            &nbsp;{searchText}
          </StyledTypography>
        </Box>
        <Divider
          variant="middle"
          css={css({
            backgroundColor: '#000000',
            borderBottomWidth: '0.75px',
            margin: 'auto',
            width: '30%',
            '@media (max-width: 768px)': {
              width: '60%'
            }
          })}
        />
        <Box
          css={css({
            maxHeight: '100%',
            overflow: 'auto',
            marginTop: '10px',
            paddingBottom: '10%',
            '@media (max-width: 768px)': {
              paddingBottom: '30%'
            }
          })}
        >
          {turfsList.loading || turfsList.refreshing ? (
            <Loader secondary={LOADING} />
          ) : (!turfsList.data || turfsList.data?.length < 1) &&
            searchResults.length < 1 ? (
            <div
              css={css(`
            text-align:center
            `)}
            >
              <ErrorOutlineOutlinedIcon
                css={css(`margin-top: 40px; color: white`)}
              />
              <StyledTypography color={'white'}>
                {'No matching results'}
              </StyledTypography>
              <Button onClick={() => setSearchText('')}>Load all Turfs</Button>
            </div>
          ) : (
            ''
          )}
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
            {searchResults?.map((turf, index) => (
              <CardView
                data={turf}
                key={`${turf.id}_${index}`}
                onClick={() => {
                  setSelectedTurfData({ ...turf, bookScreen: false });
                  setSearchResultScreen({
                    ...searchResultScreen,
                    cardScreen: true
                  });
                }}
              />
            ))}
          </Container>
        </Box>
        <Dialog
          disablePortal
          open={searchResultScreen.cardScreen}
          css={css({
            backgroundColor: 'rgba(22,22,22,0.62)'
          })}
          PaperComponent={SelectedTurfCard}
        />
      </Paper>
    </StyledModal>
  );
};

export default SearchResults;
