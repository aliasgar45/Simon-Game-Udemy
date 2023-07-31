import { AddTurfRequest } from '../../modules/add-turf/typings/request';
import { atomWithReset } from 'jotai/utils';

export const addTurfDataAtom = atomWithReset<AddTurfRequest>({
  name: '',
  area: '',
  address: '',
  locationUrl: '',
  ownerPhone: '',
  ownerName: '',
  slots: [],
  games: [],
  secret: ''
});
