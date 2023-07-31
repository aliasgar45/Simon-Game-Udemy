import { ButtonBase, ButtonBaseProps } from '@mui/material';

export default function StyledButtonBase({ sx, ...props }: ButtonBaseProps) {
  return <ButtonBase {...props} />;
}
