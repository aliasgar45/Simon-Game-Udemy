import { createPaginatedRequestAtom } from '../utils/request-atom';
import { atom } from 'jotai';
import {
  GetTurfsRequestPaginationParam,
  TurfData
} from '../../modules/home/typings/request';

export const searchRequestAtom = atom<string>('');
export const searchResultScreenAtom = atom<{
  searchScreen: boolean;
  cardScreen: boolean;
  isNearbyQuery: boolean;
}>({
  searchScreen: false,
  cardScreen: false,
  isNearbyQuery: false
});

export const searchResultsQueryAtom = createPaginatedRequestAtom<
  TurfData,
  GetTurfsRequestPaginationParam
>({ loading: false });

export const searchResultsAtom = atom<TurfData[]>([]);

export const selectedTurfDataAtom = atom<TurfData & { bookScreen: boolean }>({
  id: '',
  name: '',
  area: '',
  address: '',
  imgUrl: '',
  latitude: 0,
  longitude: 0,
  slots: {},
  games: [],
  bookScreen: false
});

export const bookTurfScreenAtom = atom<{
  daySelected: string | null;
  slotSelected: string | null;
  wantReferee: boolean;
  wantVideoRecording: boolean;
}>({
  daySelected: null,
  slotSelected: null,
  wantReferee: false,
  wantVideoRecording: false
});
