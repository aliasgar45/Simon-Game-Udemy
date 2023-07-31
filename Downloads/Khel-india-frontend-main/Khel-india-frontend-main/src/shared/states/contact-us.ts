import { atom } from 'jotai';

export const contactUsAtom = atom<{
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}>({
  name: '',
  phone: '',
  email: '',
  message: ''
});
