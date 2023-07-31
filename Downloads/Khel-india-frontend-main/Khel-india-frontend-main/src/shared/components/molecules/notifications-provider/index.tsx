/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useAtom } from 'jotai';
import { useAtomCallback } from 'jotai/utils';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  notificationAtomFamily,
  notificationKeysAtom
} from '../../../states/notifications';
import Notification from '../../atoms/notification';

export const NotificationsProvider: React.FC<{
  maxNotifications?: number;
}> = ({ maxNotifications }) => {
  const [notificationKeys, setNotificationKeys] = useAtom(notificationKeysAtom);
  const totalNotificationKeys = notificationKeys.length - 1;

  const removeNotification = useAtomCallback<void, { id: string }>(
    (get, set, { id }) => {
      const notification = get(notificationAtomFamily({ id }));

      set(notificationAtomFamily({ id }), {
        ...notification,
        open: false
      });
    }
  );
  const portalContainer = document.getElementById('portal')!;

  useEffect(() => {
    if (maxNotifications && totalNotificationKeys >= maxNotifications) {
      const firstNotification = notificationKeys[0];
      const newNotifications = notificationKeys.slice(1);

      removeNotification({ id: firstNotification });
      setNotificationKeys(newNotifications);
    }
  }, [
    setNotificationKeys,
    removeNotification,
    notificationKeys,
    totalNotificationKeys,
    maxNotifications
  ]);

  return createPortal(
    <div
      css={css`
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 12px;
        right: 24px;
        z-index: 10000;
      `}
    >
      {notificationKeys.map((id) => {
        return <Notification key={id} id={id} />;
      })}
    </div>,
    portalContainer
  );
};
