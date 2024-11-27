import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  LocationsCFSearchParamsDTO,
  LocationsCFsResponseDTO,
} from "../../../types/locations";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/locations";

type ResponseTypes =
  | LocationsCFsResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  locationId: string,
  options: LocationsCFSearchParamsDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvents = async () => {
    const query = new URLSearchParams(options).toString();
    const URL = `${baseUrl}/${locationId}/customFields?${query}`;
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
