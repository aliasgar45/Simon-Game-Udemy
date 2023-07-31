import { AddTurfRequest, EditTurfRequest } from '../typings/request';
import { put } from '../../../infra/rest';

const editTurf = async ({
  id,
  file,
  imgUrl,
  slots,
  games,
  ...rest
}: EditTurfRequest) => {
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

  await put<AddTurfRequest>({
    url: `/v1/turf/${id}`,
    options: {
      body
    },
    useDefaultHeaders: !isFormData
  });
};

export default editTurf;
