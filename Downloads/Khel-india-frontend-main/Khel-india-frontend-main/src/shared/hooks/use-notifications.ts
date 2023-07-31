import {
  notificationKeysAtom,
  notificationAtomFamily
} from '../states/notifications';
import { useAtomCallback } from 'jotai/utils';
import { Notification } from '../typings/notification';

const useNotifications = () => {
  const addNotification = useAtomCallback<
    string,
    Partial<Notification> & { message: Notification['message'] }
  >((get, set, { id, ...content }) => {
    const realId = id ? id : Date.now().toString();
    const ids = get(notificationKeysAtom);

    if (!ids.includes(realId)) {
      set(notificationKeysAtom, [...ids, realId]);
    }

    const notification = {
      id: realId,
      open: true,
      message: content.message,
      type: content.type ?? 'success',
      autoHideDuration: content.autoHideDuration ?? 2000
    };

    set(notificationAtomFamily({ id: realId }), notification);
    return realId;
  });

  const hideNotification = useAtomCallback<void, { id: string }>(
    (get, set, { id }) => {
      const notificationAtom = notificationAtomFamily({ id });
      const notification = get(notificationAtom);
      set(notificationAtomFamily({ id }), { ...notification, open: false });
    }
  );

  const removeNotification = useAtomCallback<void, { id: string }>(
    (get, set, { id }) => {
      set(notificationKeysAtom, (ids) => ids.filter((sid) => sid !== id));
    }
  );

  return { removeNotification, hideNotification, addNotification };
};

export default useNotifications;
