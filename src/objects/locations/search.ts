import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type {
  LocationsSearchOptions,
  LocationsSearchParams,
  LocationsSearchResponseDTO,
} from "../../types/locations";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/locations/search";

type ResponseTypes =
  | LocationsSearchResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  options: LocationsSearchOptions,
  authToken: string
): Promise<ResponseTypes | null> => {
  const { companyId, email, limit, order, skip } = options;

  const executeRequest = async (): Promise<ResponseTypes> => {
    let params: LocationsSearchParams = {};
    if (companyId) params.companyId = companyId.toString();
    if (email) params.email = email.toString();
    if (limit) params.limit = limit.toString();
    if (order) params.order = order.toString();
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
