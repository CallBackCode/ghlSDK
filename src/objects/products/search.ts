import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { ProductsPriceListResponseDTO } from "../../../types/products";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/products";

type SearchParams = {
  locationId: string; // The location id to filter the response
  ids?: string; // To filter the response only with the given price ids, Please provide with comma separated
  limit?: number; // The number of items to return
  offset?: number; // The number of items to skip before starting to collect the result set
};

type Params = {
  locationId: string;
  ids?: string;
  limit?: string;
  offset?: string;
};

type ResponseTypes =
  | ProductsPriceListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  productId: string,
  options: SearchParams,
  authToken: string
): Promise<ResponseTypes> | null => {
  const { locationId, ids, limit, offset } = options;

  const fetchEvents = async () => {
    const params: Params = { locationId };
    if (ids) params.ids = ids;
    if (limit) params.limit = limit.toString();
    if (offset) params.offset = offset.toString();

    const query = new URLSearchParams(params).toString();
    const URL = `${baseUrl}/${productId}/customFields?${query}`;
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(fetchEvents);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default search;
