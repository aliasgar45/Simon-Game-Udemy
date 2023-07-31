import { useState } from 'react';
import {
  ButtonProps,
  Dialog,
  DialogActions,
  Divider,
  IconButtonProps,
  PaperProps
} from '@mui/material';
import StyledButton from '../../atoms/button';
import { Buttons } from '../../atoms/button/types';
import StyledIconButton from '../../atoms/icon-button';

interface StyledPopUpProps {
  buttonType?: Buttons;
  buttonProps?: ButtonProps;
  paperProps?: PaperProps;
  iconButtonProps?: IconButtonProps;
  dialogContent?: (
    setOpen: (open: boolean) => void,
    open: boolean
  ) => JSX.Element;
  showActions?: boolean;
  children: ButtonProps['children'];
  onPrimaryButtonClick?: () => Promise<any>;
  onSecondaryButtonClick?: () => void;
}

const buttons = {
  [Buttons.text]: StyledButton,
  [Buttons.icon]: StyledIconButton
};

export default function StyledPopUpButton({
  buttonType = Buttons.text,
  buttonProps,
  iconButtonProps,
  paperProps,
  showActions = true,
  children,
  onPrimaryButtonClick,
  dialogContent,
  onSecondaryButtonClick
}: StyledPopUpProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePrimaryClick = () => {
    setLoading(true);
    onPrimaryButtonClick?.()?.finally(() => {
      setLoading(false);
      handleClose();
    });
  };

  const handleSecondaryClick = () => {
    onSecondaryButtonClick?.();
    handleClose();
  };

  const ButtonToRender = buttons[
    buttonType
  ] as typeof buttonType extends Buttons.text
    ? typeof StyledButton
    : typeof StyledIconButton;

  return (
    <>
      <ButtonToRender
        {...(buttonType === Buttons.text ? buttonProps : iconButtonProps)}
        onClick={handleOpen}
      >
        {children}
      </ButtonToRender>
      <Dialog open={open} onClose={handleClose} PaperProps={paperProps}>
        {dialogContent?.(setOpen, open)}
        {showActions && (
          <DialogActions
            sx={{
              padding: '17px 28px',
              gap: '24px'
            }}
          >
            <Divider variant={'fullWidth'} />
            <StyledButton
              variant={'text'}
              disabled={loading}
              sx={{
                color: 'rgba(162,162,162,1)',
                margin: '0',
                padding: '0',
                background: 'none'
              }}
              onClick={handleSecondaryClick}
            >
              CANCEL
            </StyledButton>
            {onPrimaryButtonClick && (
              <StyledButton
                onClick={handlePrimaryClick}
                sx={{
                  color: '#dc8f38',
                  margin: '0',
                  fontWeight: 700,
                  padding: '0',
                  background: 'none'
                }}
                variant={'text'}
                disabled={loading}
              >
                {loading ? 'O..' : 'INVITE'}
              </StyledButton>
            )}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}
