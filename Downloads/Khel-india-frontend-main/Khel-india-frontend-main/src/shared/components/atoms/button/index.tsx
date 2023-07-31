import { Button, ButtonProps } from '@mui/material';

export default function StyledButton({ sx, ...props }: ButtonProps) {
  return (
    <Button
      sx={{
        borderRadius: '4px',
        backgroundColor: '#dc8f38',
        ...sx
      }}
      {...props}
    />
  );
}

export type { ButtonProps };
