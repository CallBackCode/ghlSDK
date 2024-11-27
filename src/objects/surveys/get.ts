import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { SuverysGetResponseSchema } from "../../types/surveys";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/surveys";

type SearchParams = {
  locationId: string; // The location id to filter the response
  type?: string; // The type of the survey
  limit?: number; // The number of items to return
  skip?: number; // The number of items to skip before starting to collect the result set
};

type Params = {
  locationId: string;
  type?: string;
  limit?: string;
  skip?: string;
};

type ResponseTypes =
  | SuverysGetResponseSchema
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  options: SearchParams,
  authToken: string
): Promise<ResponseTypes> | null => {
  const { locationId, type, limit, skip } = options;
  const fetchEvent = async () => {
    const params: Params = { locationId };
    if (type) params.type = type;
    if (limit) params.limit = limit.toString();
    if (skip) params.skip = skip.toString();

    const URL = `${baseUrl}?` + new URLSearchParams(params);
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
    return await withExponentialBackoff(fetchEvent);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default get;
