/** @jsxImportSource @emotion/react */

import {
  Box,
  Button,
  css,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchResults from './search-results';
import OfferingsScreen from './offerings';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../../shared/constants/routes';
import Logo from '../../../shared/assets/img/logo';
import BackgroundImage from '../../../shared/assets/img/home-bg.png';
import FlattenedFootballImage from '../../../shared/assets/img/home-flattened-football.png';
import TennisBallImage from '../../../shared/assets/img/tennis-ball.png';
import BackgroundImageMobile from '../../../shared/assets/img/home-bg-mobile.png';
import React from 'react';
import HomeSearchBar from './search-bar';
import WhyChooseUsScreen from './why-choose-us';
import {
  bounceAtAngleOf45Degrees,
  moveAt45DegreesTowardsTop,
  shake
} from '../../../shared/styles/animations';

const Home = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <>
      <div
        css={css({
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden'
        })}
      >
        <div
          css={css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '10px 10px 0'
          })}
        >
          <div
            css={css({
              flex: 1
            })}
          >
            <IconButton
              onClick={() => setDrawerOpen(true)}
              edge="start"
              sx={{
                ml: '5px',
                color: 'white',
                ...(drawerOpen && { display: 'none' })
              }}
              css={css({
                display: 'none',
                '@media (max-width: 768px)': {
                  display: 'unset'
                }
              })}
            >
              <MenuIcon fontSize={'large'} />
            </IconButton>
          </div>
          <div
            css={css({
              flex: 1,
              textAlign: 'center'
            })}
          >
            <Logo width={200} />
          </div>
          <div
            css={css({
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              '@media (max-width: 768px)': {}
            })}
          >
            <Button
              css={css({
                color: 'white',
                fontSize: '20px',
                '@media (max-width: 768px)': {
                  display: 'none'
                }
              })}
              onClick={() => navigate(ROUTES.ABOUT_US)}
            >
              ABOUT US
            </Button>
            <Divider
              variant={'middle'}
              css={css({ backgroundColor: 'white', width: '1px' })}
              orientation="vertical"
              flexItem
            />
            <Button
              css={css({
                color: 'white',
                fontSize: '20px',
                '@media (max-width: 768px)': {
                  display: 'none'
                }
              })}
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              CONTACT
            </Button>
          </div>
        </div>
        <div
          css={css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'absolute',
            top: '55%',
            width: '100%'
          })}
        >
          <div
            css={css({
              margin: '0 auto',
              width: '50%',
              '@media (max-width: 768px)': {
                width: '90%'
              }
            })}
          >
            <HomeSearchBar />
          </div>
          <Button
            css={css({
              color: 'white',
              borderRadius: '30px',
              margin: '10px auto',
              '@media (max-width: 768px)': {}
            })}
            variant={'contained'}
            onClick={() => {
              window.open(
                'https://chat.whatsapp.com/Kk6XzGBCTE9JD5B8X21T8o',
                'popUpWindow',
                'height=400,width=600,left=10,top=10,scrollbars=yes,menubar=no'
              );
            }}
          >
            Join The Movement Now
          </Button>
        </div>
        <img
          alt={'BackgroundImage'}
          css={css({
            objectFit: 'contain',
            flexGrow: 1,
            height: 0,
            '@media (max-width: 768px)': {
              display: 'none'
            }
          })}
          src={BackgroundImage}
        />
        <img
          alt={'FlattenedFootballImage'}
          css={css({
            objectFit: 'contain',
            position: 'absolute',
            left: '51%',
            top: '21%',
            height: '200px',
            animation: `${shake} 2s infinite, ${moveAt45DegreesTowardsTop(
              100
            )} 2s infinite`,
            '@media (max-width: 768px)': {
              animation: `${shake} 2s infinite`,
              height: '80px',
              left: '73%',
              top: '34%'
            }
          })}
          src={FlattenedFootballImage}
        />
        <img
          alt={'TennisBallImage'}
          css={css({
            objectFit: 'contain',
            position: 'absolute',
            left: '1.7%',
            top: '80%',
            height: '65px',
            animation: `${bounceAtAngleOf45Degrees(90, 70)} 10s infinite`,
            '@media (max-width: 768px)': {
              zIndex: '-1',
              height: '70px',
              left: '6%',
              top: '12%',
              animation: `${bounceAtAngleOf45Degrees(100, 100)} 10s infinite`
            }
          })}
          src={TennisBallImage}
        />
        <img
          alt={'BackgroundImageMobile'}
          css={css({
            display: 'none',
            objectFit: 'contain',
            flexGrow: 1,
            height: 0,
            '@media (max-width: 768px)': {
              display: 'unset'
            }
          })}
          src={BackgroundImageMobile}
        />
        <SwipeableDrawer
          css={css({
            display: 'none',
            '@media (max-width: 768px)': {
              display: 'unset'
            }
          })}
          PaperProps={{
            sx: { width: '50%' }
          }}
          anchor={'left'}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <Box
            onClick={() => setDrawerOpen(false)}
            onKeyDown={() => setDrawerOpen(false)}
          >
            <List>
              <ListItem>
                <ListItemButton onClick={() => navigate(ROUTES.ABOUT_US)}>
                  <ListItemText primary={'ABOUT US'} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={() => navigate(ROUTES.CONTACT)}>
                  <ListItemText primary={'CONTACT'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </SwipeableDrawer>
        <SearchResults />
      </div>
      <div
        css={css({
          position: 'relative',
          '@media (max-width: 768px)': {}
        })}
      >
        <OfferingsScreen />
      </div>
      <div
        css={css({
          position: 'relative',
          '@media (max-width: 768px)': {}
        })}
      >
        <WhyChooseUsScreen />
      </div>
    </>
  );
};

export default Home;
