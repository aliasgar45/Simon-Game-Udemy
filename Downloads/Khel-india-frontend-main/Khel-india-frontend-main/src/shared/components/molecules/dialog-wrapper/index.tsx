import { Dialog as MuiDialog, DialogProps, Fade } from '@mui/material';
import { forwardRef, ReactNode, useCallback } from 'react';
import { TransitionProps } from '@mui/material/transitions';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Fade in ref={ref} {...props} />;
});

interface StyledUrlDialogProps {
  onClose: () => void;
  children: ReactNode | ReactNode[];
  dialogProps?: Omit<DialogProps, 'open' | 'onClose'>;
}

const StyledUrlDialog: React.FC<StyledUrlDialogProps> = ({
  onClose,
  children,
  dialogProps
}) => {
  return (
    <MuiDialog
      PaperProps={{
        sx: {
          margin: '14px',
          width: '90%'
        }
      }}
      open
      onClose={onClose}
      TransitionComponent={Transition}
      {...dialogProps}
    >
      {children}
    </MuiDialog>
  );
};

interface DialogWrapperProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode | ReactNode[];
  dialogProps?: Omit<DialogProps, 'open' | 'onClose'>;
}

const DialogWrapper: React.FC<DialogWrapperProps> = ({
  open,
  onClose: onCloseProp,
  children,
  dialogProps
}) => {
  // remove setOpen we dont need it
  const onClose = useCallback(() => {
    onCloseProp();
  }, [onCloseProp]);

  if (open) {
    return (
      <StyledUrlDialog onClose={onClose} dialogProps={dialogProps}>
        {children}
      </StyledUrlDialog>
    );
  }

  return null;
};

export default DialogWrapper;
