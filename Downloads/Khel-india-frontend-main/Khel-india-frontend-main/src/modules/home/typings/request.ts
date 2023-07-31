export type GetTurfsRequest = GetTurfsRequestPaginationParam & {
  search?: string;
};

export type GetTurfsRequestPaginationParam = {
  nextPaginationParam?: string | null;
};

export type TurfSlotData = {
  id: string;
  startTime: string;
  endTime: string;
  cost: number;
};

export type TurfData = {
  id: string;
  name: string;
  area: string;
  address: string;
  imgUrl: string;
  latitude: number;
  longitude: number;
  slots: Record<string, Array<TurfSlotData>>;
  games: Array<string>;
};

export type GetTurfsResponse = {
  turfs: Array<TurfData>;
  hasMore: boolean;
  nextPaginationParam: string | null;
};
