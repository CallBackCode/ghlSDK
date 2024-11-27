import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { FunnelsPageResponseDTO } from "../../types/funnels";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/funnels/page";

type SearchOptions = {
  locationId: string;
  funnelId: string;
  limit: number;
  offset: number;
  name?: string;
};

type Params = {
  locationId: string;
  funnelId: string;
  limit: string;
  offset: string;
  name?: string;
};

type ResponseTypes =
  | FunnelsPageResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const listPages = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, funnelId, limit, offset, name } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = {
      locationId,
      funnelId,
      limit: limit.toString(),
      offset: offset.toString(),
    };
    if (name) params.name = name;

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

export default listPages;
