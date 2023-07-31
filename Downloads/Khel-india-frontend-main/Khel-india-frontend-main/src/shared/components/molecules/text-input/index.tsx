import {
  styled,
  SxProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import {
  TEXT_COLOR,
  TEXT_COLOR_LIGHT,
  VARIABLES_BORDER_COLOR
} from '../../../constants/colors';

interface variableOptionProps {
  name: string;
  value: string;
  key: number;
  textInputRef: React.RefObject<HTMLInputElement>;
  onClick?: (val: string) => void;
}

const variableOption: React.FC<variableOptionProps> = ({
  name,
  value,
  key,
  textInputRef,
  onClick
}) => {
  const handleOnClick = () => {
    const ref = textInputRef.current;
    let cursorPos = ref?.selectionStart || 0;
    let textBeforeCursorPosition = ref?.value.substring(0, cursorPos);
    let textAfterCursorPosition = ref?.value.substring(
      cursorPos,
      ref.value?.length
    );
    if (!ref) {
      return;
    }
    onClick?.(
      textBeforeCursorPosition + `{{${name}}}` + textAfterCursorPosition
    );
    ref.value =
      textBeforeCursorPosition + `{{${name}}}` + textAfterCursorPosition;
    cursorPos = cursorPos + name.length + 4;
    ref.focus();
    ref.setSelectionRange(cursorPos, cursorPos);
  };

  return (
    <Box
      key={key}
      sx={{
        border: `1px dashed ${VARIABLES_BORDER_COLOR}`,
        padding: '6px 12px',
        width: 'max-content',
        height: 'min-content',
        borderRadius: '14px',
        marginTop: '12px',
        cursor: 'pointer'
      }}
      onClick={handleOnClick}
    >
      <Typography
        sx={{
          fontSize: '10px',
          fontWeight: '400',
          color: TEXT_COLOR_LIGHT,
          width: 'inherit'
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

interface TextProps {
  headerTitle?: React.ReactNode;
  subtitle?: string;
  tags?: { name: string; value: string }[];
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onValueChange?: (val: string) => void;
  multiLine?: boolean;
  placeholder?: string;
  value?: string;
  sx?: SxProps;
  autoComplete?: string;
  textInputProps?: TextFieldProps;
  headerProps?: TypographyProps<'span'>;
  disabled?: boolean;
  autoFocus?: boolean;
}

const StyledTextField = styled(TextField)(() => ({
  'input::placeholder, textArea::placeholder': {
    color: '#CDCDDF'
  },
  marginTop: '12px',
  '.MuiInputBase-root::before': {
    borderBottom: '1px solid #E5E6EC'
  }
}));

const StyledTextInput: React.FC<TextProps> = ({
  headerTitle,
  subtitle,
  tags,
  onChange,
  placeholder,
  autoFocus,
  onValueChange,
  multiLine,
  autoComplete,
  value,
  sx,
  textInputProps,
  headerProps,
  disabled = false
}) => {
  const textInputRef = useRef(null);

  return (
    <Box sx={sx}>
      {headerTitle && (
        <Typography
          {...headerProps}
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color: TEXT_COLOR,
            ...headerProps?.sx
          }}
        >
          {headerTitle}
        </Typography>
      )}
      {subtitle && (
        <Typography
          sx={{
            color: TEXT_COLOR,
            opacity: '60%',
            fontSize: '12px',
            fontWeight: '400',
            marginTop: '12px'
          }}
        >
          {subtitle}
        </Typography>
      )}

      <StyledTextField
        hiddenLabel
        fullWidth
        placeholder={placeholder}
        variant="standard"
        multiline={multiLine}
        autoFocus={autoFocus}
        minRows={4}
        onChange={onChange}
        value={value}
        inputRef={textInputRef}
        autoComplete={autoComplete}
        disabled={disabled}
        {...textInputProps}
      />
      {tags && (
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            overflow: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',

            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {tags?.map(({ name, value }, key) => {
            return variableOption({
              name,
              value,
              key,
              textInputRef,
              onClick: onValueChange
            });
          })}
        </Box>
      )}
    </Box>
  );
};

export default StyledTextInput;
