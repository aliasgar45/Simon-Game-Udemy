import React, { FC } from 'react';
import { Alert, AlertProps, Snackbar, SnackbarProps } from '@mui/material';

type StyledSnackbarProps = SnackbarProps & AlertProps;

const StyledSnackbar: FC<StyledSnackbarProps> = ({
  sx = { width: '100%' },
  onClose,
  open,
  TransitionComponent,
  severity,
  message,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center'
  },
  autoHideDuration = 2000
}) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={anchorOrigin}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      TransitionComponent={TransitionComponent}
    >
      <Alert severity={severity} sx={sx}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default StyledSnackbar;
