/** @jsxImportSource @emotion/react */

import { css } from '@mui/material';
import Logo from '../../../../shared/assets/img/logo';
import { StyledTypography } from '../../../../shared/components/atoms';
import BallAndNetImg from '../../../../shared/assets/img/why-choose-us/net-and-ball.png';
import TennisBallRuggedImage from '../../../../shared/assets/img/why-choose-us/tennis-ball-rugged.png';
import NetStringImage from '../../../../shared/assets/img/why-choose-us/net-string.png';
import AbstractImg from '../../../../shared/assets/img/why-choose-us/abstract.png';
import BasketBallImg from '../../../../shared/assets/img/why-choose-us/basketball.png';
import BasketBallShadowImg from '../../../../shared/assets/img/why-choose-us/basketball-shadow.png';
import TennisPlayerImg from '../../../../shared/assets/img/why-choose-us/tennis-player.png';
import BackgroundImg from '../../../../shared/assets/img/why-choose-us/why-choose-us-bg.png';
import BackgroundMobileImg from '../../../../shared/assets/img/why-choose-us/why-choose-us-mobile-bg.png';

import React from 'react';
import { bounce, shake } from '../../../../shared/styles/animations';

const WhyChooseUsScreen = () => {
  return (
    <>
      <div
        css={css({
          padding: '20px 20px 0',
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${BackgroundImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          '@media (max-width: 768px)': {
            padding: 0,
            width: '100vw',
            backgroundImage: `url(${BackgroundMobileImg})`
          }
        })}
      >
        <div
          css={css({
            flex: '1 1 30%',
            height: '100%',
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
            '@media (max-width: 768px)': {
              width: '100%',
              flex: 'unset'
            }
          })}
        >
          <div
            css={css({
              height: 'auto',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              '@media (max-width: 768px)': {
                height: 'auto',
                width: '100%',
                alignItems: 'center',
                padding: '0'
              }
            })}
          >
            <div
              css={css({
                marginBottom: '20px',
                '@media (max-width: 768px)': {
                  margin: '20px 0 0px'
                }
              })}
            >
              <Logo width={150} color={'#000000'} />
            </div>
            <iframe
              css={css({
                border: 0,
                width: '90%',
                height: '200px',
                objectFit: 'contain',
                display: 'none',
                '@media (max-width: 768px)': {
                  display: 'unset'
                }
              })}
              src="https://www.youtube.com/embed/KNKR3oasH2o"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <StyledTypography
              variant={'h3'}
              fontWeight={'bolder'}
              css={css({
                fontSize: '35px',
                color: 'white',
                '@media (max-width: 768px)': {
                  marginLeft: '20px',
                  marginRight: 'auto',
                  fontSize: '20px',
                  marginTop: '20px'
                }
              })}
            >
              Why Choose Us?
            </StyledTypography>
            <StyledTypography
              variant={'body1'}
              color={'white'}
              textAlign={'left'}
              css={css({
                margin: '20px 0',
                '@media (max-width: 768px)': {
                  fontSize: 'calc(100vh * 0.027)',
                  width: '90%',
                  textAlign: 'left'
                }
              })}
            >
              By choosing us, you can be sure that you're getting a high-quality
              service that is designed to make it easy for you to connect with
              other sports enthusiasts and play the sport you love.
            </StyledTypography>
            <div
              css={css({
                position: 'absolute',
                bottom: '2%',
                right: 0,
                display: 'none',
                flexDirection: 'column',
                alignItems: 'end',
                '@media (max-width: 768px)': {
                  display: 'flex'
                }
              })}
            >
              <img
                alt={'basketball-img'}
                css={css({
                  height: 'calc(100vh * 0.25)',
                  objectFit: 'contain',
                  animation: `${bounce('calc(100vh * -0.085)')} 2s infinite`,
                  '@media (max-width: 768px)': {}
                })}
                src={BasketBallImg}
              />
              <img
                alt={'basketball-shadow-img'}
                css={css({
                  width: 'calc(100vh * 0.15)',
                  margin: '0 auto',
                  objectFit: 'contain',
                  '@media (max-width: 768px)': {}
                })}
                src={BasketBallShadowImg}
              />
            </div>
          </div>
          <div
            css={css({
              position: 'relative',
              flex: 1,
              '@media (max-width: 768px)': {
                display: 'none'
              }
            })}
          >
            <img
              alt={'tennis-player-img'}
              css={css({
                zIndex: 1,
                width: '105%',
                left: '0%',
                bottom: '0%',
                position: 'absolute',
                objectFit: 'contain',
                '@media (max-width: 768px)': {}
              })}
              src={TennisPlayerImg}
            />
          </div>
        </div>
        <div
          css={css({
            flex: '1 1 70%',
            height: '100%',
            width: 'auto',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          })}
        >
          <iframe
            css={css({
              width: '100%',
              height: '60%',
              border: 0,
              objectFit: 'contain',
              '@media (max-width: 768px)': {}
            })}
            src="https://www.youtube.com/embed/KNKR3oasH2o"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <div
            css={css({
              flex: 1,
              height: '39%',
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              '@media (max-width: 768px)': {}
            })}
          >
            <div
              css={css({
                display: 'flex',
                position: 'relative',
                '@media (max-width: 768px)': {}
              })}
            >
              <img
                alt={'ball-net-img'}
                css={css({
                  objectFit: 'contain',
                  '@media (max-width: 768px)': {}
                })}
                src={BallAndNetImg}
              />
              <img
                alt={'TennisBallRuggedImage'}
                css={css({
                  position: 'absolute',
                  width: '120px',
                  left: '23%',
                  top: '28%',
                  animation: `${shake} 1s infinite`,
                  '@media (max-width: 768px)': {}
                })}
                src={TennisBallRuggedImage}
              />
              <img
                alt={'NetStringImage'}
                css={css({
                  position: 'absolute',
                  height: '100%',
                  left: '52%',
                  '@media (max-width: 768px)': {}
                })}
                src={NetStringImage}
              />
            </div>
            <img
              alt={'abstract-img'}
              css={css({
                objectFit: 'contain',
                '@media (max-width: 768px)': {}
              })}
              src={AbstractImg}
            />
            <div
              css={css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'end',
                '@media (max-width: 768px)': {}
              })}
            >
              <img
                alt={'basketball-img'}
                css={css({
                  height: '200px',
                  objectFit: 'contain',
                  animation: `${bounce('-100px')} 2s infinite`,
                  '@media (max-width: 768px)': {}
                })}
                src={BasketBallImg}
              />
              <img
                alt={'basketball-shadow-img'}
                css={css({
                  width: '50%',
                  objectFit: 'contain',
                  '@media (max-width: 768px)': {}
                })}
                src={BasketBallShadowImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WhyChooseUsScreen;
