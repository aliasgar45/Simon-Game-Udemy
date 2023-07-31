import { get } from '../../../infra/rest';
import { GetTurfsRequest, GetTurfsResponse } from '../typings/request';

const getTurfsList = async ({
  search,
  nextPaginationParam
}: GetTurfsRequest) => {
  return get<GetTurfsResponse>({
    url: `/v1/turf`,
    options: {
      queryParams: {
        search,
        ...(nextPaginationParam && { nextPaginationParam })
      }
    }
  });
};

export default getTurfsList;
