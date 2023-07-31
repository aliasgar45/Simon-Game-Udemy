import React from 'react';
import {
  FormControl,
  MenuItem,
  Select,
  SelectProps,
  styled,
  Typography
} from '@mui/material';

import { css } from '@emotion/react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { TEXT_COLOR } from '../../../constants/colors';

export enum DropdownVariants {
  DEFAULT = 'default'
}

interface CustomSelectProps {
  styleVariant: DropdownVariants;
}

const styles = {
  [DropdownVariants.DEFAULT]: css`
    .MuiInputBase-root {
      background: white;
      border-radius: 4px;
      border: 0.5px solid rgba(244, 244, 249, 1);
      box-shadow: 0px 1px 1px rgba(210, 210, 210, 0.5);
      width: max-content;
    }
  `
  //can add more variant styles in the future
};

const StyledFormControl = styled(FormControl)<CustomSelectProps>(
  ({ styleVariant, theme }) => {
    return styles[styleVariant];
  }
);

interface DropdownProps {
  selectProps?: SelectProps;
  variant?: DropdownVariants;
  width?: string;
  height?: string;
  sx?: any;
  title?: string;
  onChange?: Pick<SelectProps, 'onChange'>;
  options: Array<{ name?: string; value: string }>;
  value?: string | number;
  placeholder?: string;
}

const StyledDropdown: React.FC<DropdownProps> = ({
  variant = DropdownVariants.DEFAULT,
  title,
  onChange,
  options = [],
  selectProps,
  value,
  sx,
  placeholder
}) => {
  return (
    <StyledFormControl sx={sx} styleVariant={variant}>
      {title && (
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: TEXT_COLOR,
            marginBottom: '12px'
          }}
        >
          {title}
        </Typography>
      )}
      <Select
        IconComponent={ExpandMoreRoundedIcon}
        value={value}
        {...selectProps}
      >
        <MenuItem value={0} disabled>
          {placeholder}
        </MenuItem>
        {options.map(({ name, value }, key) => {
          return (
            <MenuItem key={key} value={value}>
              {name ?? value}
            </MenuItem>
          );
        })}
      </Select>
    </StyledFormControl>
  );
};

export default StyledDropdown;
