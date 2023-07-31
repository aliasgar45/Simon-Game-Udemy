/** @jsxImportSource @emotion/react */
import { css, Stack } from '@mui/material';
import AboutUsBgImage from '../../../shared/assets/img/about-us-bg.png';
import AboutUsFootballImage from '../../../shared/assets/img/blue-football.png';
import AboutUsTennisBallImage from '../../../shared/assets/img/tennis-ball.png';
import { StyledTypography } from '../../../shared/components/atoms';
import React from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../../shared/constants/routes';
import { bounce, rotate360Degrees } from '../../../shared/styles/animations';
import Logo from '../../../shared/assets/img/logo';

const AboutUsScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        css={css({
          position: 'absolute',
          margin: '30px 30px 0',
          cursor: 'pointer',
          '@media (max-width: 768px)': {
            margin: '5% auto',
            position: 'relative',
            display: 'none'
          }
        })}
        onClick={() => navigate(ROUTES.HOME)}
      >
        <Logo width={200} />
      </div>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          maxHeight: '100vh',
          overflow: 'hidden',
          '@media (max-width: 768px)': {
            flexDirection: 'column-reverse',
            maxHeight: 'unset'
          }
        })}
      >
        <div
          css={css({
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '15%',
            padding: '0 50px',
            '@media (max-width: 768px)': {
              marginTop: 'unset',
              padding: 'unset'
            }
          })}
        >
          <h1
            css={css({
              color: 'white',
              margin: 0,
              fontSize: '9em',
              fontWeight: 'bolder',
              position: 'absolute',
              top: '5%',
              left: '50px',
              zIndex: 1,
              transform: 'rotate(-5deg)',
              '@media (max-width: 768px)': {
                width: '106%',
                position: 'relative',
                fontSize: `5.4em`,
                top: 'unset',
                left: 'unset',
                right: '8px'
              }
            })}
          >
            ABOUT US
          </h1>
          <Stack
            css={css({
              '@media (max-width: 768px)': {
                width: '100%',
                marginTop: '10%',
                padding: '0 20px'
              }
            })}
          >
            <StyledTypography
              variant={'body2'}
              fontSize={'12px'}
              css={css({
                color: 'white',
                '@media (max-width: 768px)': {
                  paddingRight: '0'
                }
              })}
            >
              Our platform aims to make it easy for individuals, teams, and
              organizations to find and book the perfect sports venue for their
              events and activities. Whether you're looking to host a
              tournament, a practice, or just a casual pick-up game, our
              platform has something for you. We want to provide a convenient
              and hassle-free booking experience, so you can focus on what
              matters most - playing the game. Our user-friendly platform allows
              for easy search and booking, and offers detailed information on
              each venue. Our platform also hosts events for individuals who
              don't have anybody to play with, to come together and play a
              match. We strive to provide a high-quality service and foster a
              vibrant sports community.
            </StyledTypography>
            <StyledTypography
              color={'white'}
              variant={'subtitle1'}
              margin={'30px 0 10px'}
            >
              Our Mission
            </StyledTypography>
            <StyledTypography
              variant={'body2'}
              fontSize={'12px'}
              css={css({
                color: 'white',
                '@media (max-width: 768px)': {
                  paddingRight: '0'
                }
              })}
            >
              Our mission is to provide a convenient and hassle-free platform
              for booking sports venues, while fostering a vibrant sports
              community by providing a platform for individuals who don't have
              anybody to play with, to come together and play a match. We strive
              to provide our customers with a wide range of sports venues and
              dedicated event managers with expertise in the game that will be
              present at the event venues to ensure that everything runs
              smoothly. We aim to provide a high-quality service that makes it
              easy for sports enthusiasts to connect with others and play the
              sport they love.
            </StyledTypography>
            <StyledTypography
              color={'white'}
              variant={'subtitle1'}
              margin={'30px 0 10px'}
            >
              Our Vision
            </StyledTypography>
            <StyledTypography
              variant={'body2'}
              fontSize={'12px'}
              css={css({
                color: 'white',
                '@media (max-width: 768px)': {
                  paddingRight: '0',
                  marginBottom: '30%'
                }
              })}
            >
              To be the go-to platform for individuals, teams, and organizations
              to find and book the perfect sports venues for their events and
              activities, while fostering a vibrant sports community.
            </StyledTypography>
          </Stack>
        </div>
        <div
          css={css({
            position: 'relative',
            flex: 2,
            height: '100vh',
            width: 'auto',
            objectFit: 'cover',
            '@media (max-width: 768px)': {
              height: 'unset',
              flex: 1
            }
          })}
        >
          <img
            css={css({ height: '100%', width: '100%' })}
            src={AboutUsBgImage}
            alt={'About Us background'}
          />
          <img
            css={css({
              position: 'absolute',
              left: '70%',
              top: '46%',
              width: '200px',
              animation: `${rotate360Degrees} 5s infinite linear`,
              '@media (max-width: 768px)': {
                width: '90px'
              }
            })}
            src={AboutUsFootballImage}
            alt={'FootBall'}
          />
          <img
            css={css({
              position: 'absolute',
              left: '80%',
              top: '88%',
              width: '90px',
              animation: `${bounce('-100px')} 2s infinite`,
              '@media (max-width: 768px)': {
                width: '40px',
                animation: `${bounce('-50px')} 2s infinite`
              }
            })}
            src={AboutUsTennisBallImage}
            alt={'Tennis Ball'}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUsScreen;
