import React, { FC } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface StyledTypographyProps extends TypographyProps {
  children?: React.ReactNode;
}

const StyledTypography: FC<StyledTypographyProps> = ({
  sx,
  children,
  ...props
}) => {
  return (
    <Typography
      sx={{
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default StyledTypography;
