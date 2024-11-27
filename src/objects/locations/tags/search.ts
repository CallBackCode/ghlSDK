import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { LocationsTagsResponseDTO } from "../../../types/locations";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/locations";

type ResponseTypes =
  | LocationsTagsResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const search = async (
  locationId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvents = async () => {
    const URL = `${baseUrl}/${locationId}/tags`;
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
