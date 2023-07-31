import { IconButton, IconButtonProps } from '@mui/material';

export default function StyledIconButton({ sx, ...props }: IconButtonProps) {
  const styles = sx
    ? {}
    : {
        borderRadius: '7px',
        boxShadow: '0px 1px 1px rgba(210,210,210, 0.5)',
        backgroundColor: 'rgba(255,255,255, 1)'
      };
  return (
    <IconButton
      {...props}
      sx={{
        ...styles,
        ...sx
      }}
    />
  );
}

export type { IconButton };
