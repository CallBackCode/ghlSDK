import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { LocationsTagResponseDTO } from "../../../types/locations";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl = "https://services.leadconnectorhq.com/locations";

type ResponseTypes =
  | LocationsTagResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const get = async (
  locationId: string,
  tagId: string,
  authToken: string
): Promise<ResponseTypes> | null => {
  const fetchEvent = async () => {
    const URL = `${baseUrl}/${locationId}/tags/${tagId}`;
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
