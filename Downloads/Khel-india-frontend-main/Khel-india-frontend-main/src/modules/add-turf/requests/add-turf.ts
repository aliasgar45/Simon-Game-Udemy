import { AddTurfRequest } from '../typings/request';
import { post } from '../../../infra/rest';

const addTurf = async ({
  file,
  imgUrl,
  slots,
  games,
  ...rest
}: AddTurfRequest) => {
  let body: FormData | string;
  let isFormData: boolean = false;
  if (file) {
    const formData = new FormData();
    formData.append('file', file);
    slots.forEach((slot, index) => {
      formData.append(`slots[${index}][day]`, slot.day);
      formData.append(`slots[${index}][startTime]`, slot.startTime);
      formData.append(`slots[${index}][endTime]`, slot.endTime);
      formData.append(`slots[${index}][cost]`, slot.cost);
    });
    games.forEach((game, index) => {
      formData.append(`games[${index}]`, game);
    });
    Object.entries(rest).forEach(([key, value]) => {
      formData.append(key, value);
    });
    body = formData;
    isFormData = true;
  } else {
    body = JSON.stringify({ imgUrl, slots, games, ...rest });
  }

  await post<AddTurfRequest>({
    url: `/v1/turf`,
    options: {
      body
    },
    useDefaultHeaders: !isFormData
  });
};

export default addTurf;
