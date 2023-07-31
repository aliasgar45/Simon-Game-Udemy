import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { Notification } from '../typings/notification';

interface Param {
  id: string;
}

export const notificationAtomFamily = atomFamily(
  ({ id }: Param) => {
    return atom<Notification>({ id, message: '', open: true });
  },
  (a, b) => a.id === b.id
);

export const notificationKeysAtom = atom<string[]>([]);
