export type AddTurfRequest = {
  name: string;
  area: string;
  address: string;
  ownerPhone: string;
  ownerName: string;
  imgUrl?: string;
  file?: File;
  locationUrl: string;
  slots: Array<{
    day: string;
    startTime: string;
    endTime: string;
    cost: string;
  }>;
  games: Array<string>;
  secret: string;
};

export type EditTurfRequest = {
  id: string;
  name: string;
  area: string;
  address: string;
  imgUrl?: string;
  file?: File;
  slots: Array<{
    day: string;
    startTime: string;
    endTime: string;
    cost: string;
  }>;
  games: Array<string>;
  secret: string;
};
