/** @jsxImportSource @emotion/react */

import { LocationOff, LocationOn, SearchOutlined } from '@mui/icons-material';
import {
  Alert,
  css,
  Divider,
  IconButton,
  Snackbar,
  TextField
} from '@mui/material';
import React, { useState } from 'react';
import { useAtom, useSetAtom } from 'jotai';
import {
  searchRequestAtom,
  searchResultsAtom,
  searchResultScreenAtom
} from '../../../../shared/states/search';
import { getDistanceFromLatLonInKm } from '../../../../shared/utils/location';

const HomeSearchBar = () => {
  const [searchValue, setSearchValue] = useAtom(searchRequestAtom);
  const [searchResults, setSearchResults] = useAtom(searchResultsAtom);
  const setSearchResultScreen = useSetAtom(searchResultScreenAtom);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [locationCoordinates, setLocationCoordinates] = useState<{
    latitude: number;
    longitude: number;
    isSet: boolean;
  }>({
    latitude: 0,
    longitude: 0,
    isSet: false
  });

  const renderSearchResults = (isNearbyQuery: boolean = false) => {
    window.scrollTo(0, 0);
    setSearchResultScreen({
      searchScreen: true,
      cardScreen: false,
      isNearbyQuery
    });
  };

  const showAlert = (message: string) => {
    setAlertMessage(message);
  };

  const getNearbyResults = (latitude: number, longitude: number) => {
    let sortedSearchResultsByLocation = Array.from(searchResults);
    sortedSearchResultsByLocation = sortedSearchResultsByLocation.sort(
      (a, b) => {
        const point1 = {
          lat: latitude,
          lon: longitude
        };
        const distA = getDistanceFromLatLonInKm({
          point1,
          point2: {
            lat: a.latitude,
            lon: a.longitude
          }
        });
        const distB = getDistanceFromLatLonInKm({
          point1,
          point2: {
            lat: b.latitude,
            lon: b.longitude
          }
        });
        return distA - distB;
      }
    );
    setSearchResults(sortedSearchResultsByLocation);
    renderSearchResults(true);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      showAlert('Location is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocationCoordinates({
            latitude,
            longitude,
            isSet: true
          });
          getNearbyResults(latitude, longitude);
        },
        () => {
          showAlert('Unable to retrieve your location');
        }
      );
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={!!alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlertMessage(null)}
      >
        <Alert severity="error">{alertMessage}</Alert>
      </Snackbar>
      <TextField
        variant={'outlined'}
        css={css({
          backgroundColor: 'white',
          borderColor: 'black',
          borderRadius: '50px',
          boxShadow: '7',
          input: {
            paddingLeft: '25px',
            color: 'black',
            fontStyle: 'italic'
          },
          '& fieldset': {
            borderRadius: '50px'
          }
        })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            renderSearchResults();
          }
        }}
        InputProps={{
          endAdornment: (
            <>
              {locationCoordinates.isSet ? (
                <IconButton onClick={getLocation}>
                  <LocationOn css={css({ color: 'gray' })} />
                </IconButton>
              ) : (
                <IconButton onClick={getLocation}>
                  <LocationOff css={css({ color: 'gray' })} />
                </IconButton>
              )}
              <Divider
                variant={'middle'}
                css={css({ backgroundColor: 'black', width: '1px' })}
                orientation="vertical"
                flexItem
              />
              <IconButton
                onClick={() => renderSearchResults()}
                disabled={!searchValue}
              >
                <SearchOutlined css={css({ color: 'black' })} />
              </IconButton>
            </>
          )
        }}
        placeholder="Type area name to search turf"
        fullWidth
        value={searchValue}
        onChange={(val) => setSearchValue(val?.target.value)}
      />
    </>
  );
};

export default HomeSearchBar;
