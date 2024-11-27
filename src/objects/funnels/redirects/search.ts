import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { FunnelsRedirectListResponseDTO } from "../../../types/funnels";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/funnels/lookup/redirect/list";

type SearchOptions = {
  locationId: string;
  limit: number;
  offset: number;
  search?: string;
};

type Params = {
  locationId: string;
  limit: string;
  offset: string;
  search?: string;
};

type ResponseTypes =
  | FunnelsRedirectListResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, limit, offset, search } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = {
      locationId,
      limit: limit.toString(),
      offset: offset.toString(),
    };
    if (search) params.search = search;

    const URL = `${baseUrl}?` + new URLSearchParams(params);

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).response = response;
      throw error;
    }

    return response.json();
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default search;
