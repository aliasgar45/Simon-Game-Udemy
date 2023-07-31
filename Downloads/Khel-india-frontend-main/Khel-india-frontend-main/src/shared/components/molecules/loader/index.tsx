import {
  Typography,
  CircularProgress,
  CircularProgressProps,
  TypographyProps,
  Box,
  BoxProps
} from '@mui/material';
import { FC } from 'react';

interface LoaderProps {
  secondary?: React.ReactNode;
  primary?: React.ReactNode;
  size?: string | number;
  containerProps?: BoxProps;
  loaderProps?: CircularProgressProps;
  textProps?: TypographyProps;
}

const Loader: FC<LoaderProps> = ({
  size,
  loaderProps,
  textProps,
  containerProps,
  primary,
  secondary
}) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      {...containerProps}
    >
      {primary ? primary : <CircularProgress size={size} {...loaderProps} />}

      {typeof secondary === 'string' ? (
        <Typography
          sx={{
            marginTop: '12px',
            fontSize: '16px',
            fontWeight: '400px'
          }}
          {...textProps}
        >
          {secondary}
        </Typography>
      ) : (
        secondary
      )}
    </Box>
  );
};

export default Loader;
