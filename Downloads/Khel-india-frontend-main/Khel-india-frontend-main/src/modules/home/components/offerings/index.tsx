/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@mui/material';
import OfferingEventHostingImage from '../../../../shared/assets/img/offering/event-hosting.png';
import OfferingFlexibleBookingImage from '../../../../shared/assets/img/offering/flexible-booking.png';
import OfferingEasySearchImage from '../../../../shared/assets/img/offering/easy-search.png';
import BackgroundImage from '../../../../shared/assets/img/offering/offering-bg.png';
import ShuttleCockImage from '../../../../shared/assets/img/shuttlecock.png';
import BackgroundMobileImage from '../../../../shared/assets/img/offering/offering-mobile-bg.png';
import { StyledTypography } from '../../../../shared/components/atoms';
import Logo3 from '../../../../shared/assets/img/logo-3';
import { shuttleCockRain } from '../../../../shared/styles/animations';

const OfferingsScreen = () => {
  return (
    <div
      css={css({
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        '@media (max-width: 768px)': {
          height: 'unset',
          backgroundImage: `url(${BackgroundMobileImage})`
        }
      })}
    >
      <img
        alt={'ShuttleCockImage'}
        css={css({
          position: 'absolute',
          height: '100px',
          right: '4%',
          top: '5%',
          animation: `${shuttleCockRain} 10s linear infinite;`,
          '@media (max-width: 768px)': {}
        })}
        src={ShuttleCockImage}
      />
      <div
        css={css({
          textAlign: 'center',
          paddingTop: '5%'
        })}
      >
        <Logo3 width={150} />
      </div>
      <div
        css={css({
          display: 'flex',
          height: '100vh',
          width: '100vw',
          '@media (max-width: 768px)': {
            height: 'unset',
            width: 'unset'
          }
        })}
      >
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 768px)': {
              margin: '0 10% 0'
            }
          })}
        >
          {/*<h1*/}
          {/*  css={css({*/}
          {/*    margin: 0,*/}
          {/*    fontSize: '6em',*/}
          {/*    fontWeight: 'bolder',*/}
          {/*    width: '150%',*/}
          {/*    position: 'relative',*/}
          {/*    right: '10%',*/}
          {/*    transform: 'rotate(-5deg)',*/}
          {/*    '@media (max-width: 768px)': {*/}
          {/*      right: '15%',*/}
          {/*      width: '100%',*/}
          {/*      fontSize: `3em`*/}
          {/*    }*/}
          {/*  })}*/}
          {/*>*/}
          {/*  WHAT WE OFFER*/}
          {/*</h1>*/}
          <div
            css={css({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              margin: '5%',
              '@media (max-width: 768px)': {
                flexDirection: 'column'
              }
            })}
          >
            <div
              css={css({
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                padding: '20px'
              })}
            >
              <img
                alt={'OfferingEasySearchImage'}
                src={OfferingEasySearchImage}
                css={css({
                  width: '80%',
                  '@media (max-width: 768px)': {
                    width: '120%'
                  }
                })}
              />
              <div>
                <StyledTypography
                  variant={'h5'}
                  color={'#FFFFFF'}
                  margin={'20px 0 10px'}
                  fontWeight={'bold'}
                >
                  SMART SEARCH
                </StyledTypography>
                <StyledTypography
                  variant={'body1'}
                  color={'#FFFFFF'}
                  css={css({
                    width: '40%',
                    '@media (max-width: 768px)': {
                      padding: '0',
                      width: 'unset'
                    }
                  })}
                >
                  Users can search for venues by location, size, and amenities
                </StyledTypography>
              </div>
            </div>
            <div
              css={css({
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                padding: '20px',
                gap: '20px',
                textAlign: 'center',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  textAlign: 'center'
                }
              })}
            >
              <img
                alt={'OfferingEventHostingImage'}
                src={OfferingEventHostingImage}
                css={css({
                  width: '50%',
                  '@media (max-width: 768px)': {
                    width: '70%'
                  }
                })}
              />
              <div>
                <StyledTypography
                  variant={'h5'}
                  color={'#FFFFFF'}
                  margin={'20px 0 10px'}
                  fontWeight={'bold'}
                >
                  EVENT HOSTING
                </StyledTypography>
                <StyledTypography
                  variant={'body1'}
                  color={'#FFFFFF'}
                  css={css({
                    width: '55%',
                    margin: 'auto',
                    '@media (max-width: 768px)': {
                      padding: '0',
                      width: '80%'
                    }
                  })}
                >
                  Our platform connects individuals to play with others through
                  organized events
                </StyledTypography>
              </div>
            </div>
            <div
              css={css({
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                flexDirection: 'column',
                padding: '20px',
                gap: '20px',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  textAlign: 'center'
                }
              })}
            >
              <img
                alt={'OfferingFlexibleBookingImage'}
                src={OfferingFlexibleBookingImage}
                css={css({
                  width: '80%',
                  '@media (max-width: 768px)': {
                    width: '100%'
                  }
                })}
              />
              <div>
                <StyledTypography
                  variant={'h5'}
                  color={'#FFFFFF'}
                  margin={'20px 0 10px'}
                  fontWeight={'bold'}
                >
                  FLEXIBLE BOOKING
                </StyledTypography>
                <StyledTypography
                  variant={'body1'}
                  color={'#FFFFFF'}
                  css={css({
                    width: '55%',
                    '@media (max-width: 768px)': {
                      padding: '0',
                      width: '80%',
                      margin: 'auto'
                    }
                  })}
                >
                  We allow for booking as late as 10 minutes at no extra booking
                  fees
                </StyledTypography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingsScreen;
