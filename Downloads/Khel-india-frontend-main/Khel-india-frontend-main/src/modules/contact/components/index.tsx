/** @jsxImportSource @emotion/react */

import {
  Alert,
  Button,
  css,
  Grid,
  Snackbar,
  Stack,
  TextField
} from '@mui/material';
import { useAtom } from 'jotai';
import { contactUsAtom } from '../../../shared/states/contact-us';
import { useNavigate } from 'react-router';
import ContactImage from '../../../shared/assets/img/contact-us.png';
import Logo from '../../../shared/assets/img/logo';
import React, { useState } from 'react';
import { ROUTES } from '../../../shared/constants/routes';

const ContactScreen = () => {
  const navigate = useNavigate();
  const [contactUsData, setContactUsData] = useAtom(contactUsAtom);
  const [submitSnackbar, setSubmitSnackbar] = useState(false);

  const setContactFormDataField = (name: string, value: string) => {
    setContactUsData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setContactUsData((prev) => ({
      ...prev,
      name: '',
      phone: '',
      email: '',
      message: ''
    }));
  };

  const handleSubmit = () => {
    // TODO implement contact us api here
    handleClearForm();
    setSubmitSnackbar(true);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        autoHideDuration={3000}
        open={submitSnackbar}
        onClose={() => setSubmitSnackbar(false)}
      >
        <Alert severity="success">Submitted Successfully</Alert>
      </Snackbar>
      <div
        css={css({
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          height: '100vh',
          padding: '20px',
          gap: '20px',
          '@media (max-width: 768px)': {
            flexDirection: 'column-reverse',
            height: 'unset'
          }
        })}
      >
        <div
          css={css({
            flex: '1 1 45%',
            width: '100%',
            '@media (max-width: 768px)': {
              flex: 'unset'
            }
          })}
        >
          <div
            css={css({
              marginBottom: '20px',
              cursor: 'pointer',
              display: 'inline-block',
              '@media (max-width: 768px)': {
                display: 'none'
              }
            })}
            onClick={() => navigate(ROUTES.HOME)}
          >
            <Logo width={200} color={'#000000'} />
          </div>
          <h1
            css={css({
              margin: 0,
              color: 'white',
              fontSize: '6em',
              fontWeight: 'bolder',
              zIndex: 1,
              transform: 'rotate(-5deg)',
              '@media (max-width: 768px)': {
                transform: 'unset',
                fontSize: '3em',
                textAlign: 'center',
                margin: '10px 0'
              }
            })}
          >
            CONTACT US
          </h1>
          <Stack
            css={css({
              justifyContent: 'start',
              alignItems: 'center',
              margin: '20px',
              '@media (max-width: 768px)': {
                margin: '0'
              }
            })}
          >
            <Grid item xs={12} sm={8} md={6}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      css={css({
                        backgroundColor: '#D6D6D6',
                        borderRadius: '30px',
                        label: {
                          paddingLeft: '10px'
                        }
                      })}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          paddingLeft: '10px'
                        }
                      }}
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      variant="filled"
                      value={contactUsData.name}
                      onChange={(e) =>
                        setContactFormDataField('name', e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      css={css({
                        backgroundColor: '#D6D6D6',
                        borderRadius: '30px',
                        label: {
                          paddingLeft: '10px'
                        }
                      })}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          paddingLeft: '10px'
                        }
                      }}
                      required
                      fullWidth
                      id="phone"
                      label="Phone"
                      variant="filled"
                      type="tel"
                      value={contactUsData.phone}
                      onChange={(e) =>
                        setContactFormDataField('phone', e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      css={css({
                        backgroundColor: '#D6D6D6',
                        borderRadius: '30px',
                        label: {
                          paddingLeft: '10px'
                        }
                      })}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          paddingLeft: '10px'
                        }
                      }}
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      variant="filled"
                      type="email"
                      value={contactUsData.email}
                      onChange={(e) =>
                        setContactFormDataField('email', e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      css={css({
                        backgroundColor: '#D6D6D6',
                        borderRadius: '30px',
                        label: {
                          paddingLeft: '10px'
                        }
                      })}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          paddingLeft: '20px'
                        }
                      }}
                      required
                      fullWidth
                      id="message"
                      label="Message"
                      variant="filled"
                      multiline
                      rows={6}
                      value={contactUsData.message}
                      onChange={(e) =>
                        setContactFormDataField('message', e.target.value)
                      }
                    />
                  </Grid>
                  <Grid item xs={12} css={css({ textAlign: 'center' })}>
                    <Button
                      variant="contained"
                      css={css({
                        backgroundColor: '#0CB85D',
                        color: '#FFFFFF',
                        margin: '0 20px'
                      })}
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                    <Button
                      variant="outlined"
                      css={css({
                        color: 'gray',
                        borderColor: '#0CB85D'
                      })}
                      onClick={handleClearForm}
                    >
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Stack>
        </div>
        <img
          css={css({
            flex: '1 1 55%',
            width: '10px',
            height: 'auto',
            '@media (max-width: 768px)': {
              flex: 'unset',
              width: '100%'
            }
          })}
          alt={'ContactImage'}
          src={ContactImage}
        />
      </div>
    </>
  );
};

export default ContactScreen;
