import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlProps,
  Radio,
  RadioProps
} from '@mui/material';
import { OutlinedTextFieldProps } from '@mui/material/TextField/TextField';

export function StyledCheckbox({ ...props }: CheckboxProps) {
  return <Checkbox {...props} />;
}

export function StyledRadio({ ...props }: RadioProps) {
  return <Radio {...props} />;
}

export function StyledFormControl({ ...props }: FormControlProps) {
  return <FormControl {...props} />;
}

export interface NumericFieldI extends OutlinedTextFieldProps {
  onChangeValue: (a: string | null) => void;
}
