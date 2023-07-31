import { TurfData } from '../../modules/home/typings/request';

export const whatsappTextFormatterForTurfAvailability = ({
  day,
  time,
  turfData,
  wantReferee,
  wantVideoRecording
}: {
  day: string;
  time: string;
  turfData: TurfData;
  wantReferee: boolean;
  wantVideoRecording: boolean;
}) => {
  let extraOfferings = ' I would also like to have';
  if (wantReferee) {
    extraOfferings += ' a professional referee/umpire for the game';
    if (wantVideoRecording) {
      extraOfferings += ' and have';
    } else {
      extraOfferings += '.';
    }
  }
  if (wantVideoRecording) {
    extraOfferings += ' my game streamed on JioTV.';
  }

  return `Hello, I am interested in booking *${turfData.name}* located at ${turfData.area} for *${day} at ${time}*.\n\nIs it possible to reserve this turf at that time? If not, could you please let me know what other times and days are available?${extraOfferings}`;
};
