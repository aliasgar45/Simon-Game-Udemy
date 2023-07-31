import { Alert, Slide } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import useNotifications from '../../../hooks/use-notifications';
import { notificationAtomFamily } from '../../../states/notifications';

const Notification: React.FC<{ id: string }> = ({ id }) => {
  const mountRef = useRef(false);

  const notificationAtom = useMemo(() => {
    return notificationAtomFamily({ id });
  }, [id]);

  const notification = useAtomValue(notificationAtom);
  const {
    open,
    message,
    autoHideDuration = 2000,
    type = 'success'
  } = notification;
  const { hideNotification, removeNotification } = useNotifications();

  const onExitAnimation = useCallback(() => {
    return removeNotification({ id });
  }, [id, removeNotification]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const wasMounted = mountRef.current;
    if (!wasMounted) {
      timer = setTimeout(function () {
        hideNotification({ id });
      }, autoHideDuration);
      mountRef.current = true;
    }

    return () => {
      if (timer && wasMounted) {
        clearTimeout(timer);
      }
    };
  }, [hideNotification, id, autoHideDuration]);

  return (
    <Slide
      direction="left"
      in={open}
      mountOnEnter
      unmountOnExit
      style={{ marginBottom: '12px' }}
      onExited={onExitAnimation}
    >
      <Alert severity={type}>{message}</Alert>
    </Slide>
  );
};

export default Notification;
