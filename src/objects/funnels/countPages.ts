import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { FunnelsPageCountResponseDTO } from "../../types/funnels";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/funnels/page/count";

type SearchOptions = {
  locationId: string;
  funnelId: string;
  name?: string;
};

type Params = {
  locationId: string;
  funnelId: string;
  name?: string;
};

type ResponseTypes =
  | FunnelsPageCountResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const countPages = async (
  options: SearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { locationId, funnelId, name } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: Params = {
      locationId,
      funnelId: funnelId.toString(),
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

export default countPages;
