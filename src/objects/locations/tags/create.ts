import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  LocationsTagBodySchema,
  LocationsTagResponseDTO,
} from "../../../types/locations";
import { withExponentialBackoff } from "../../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl = "https://services.leadconnectorhq.com/locations";

type ResponseTypes =
  | LocationsTagResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  locationId: string,
  options: LocationsTagBodySchema,
  authToken: string
): Promise<ResponseTypes> | null => {
  const createAppointment = async () => {
    const URL = `${baseUrl}/${locationId}/tags`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-07-28",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });
    const data: ResponseTypes = await response.json();
    return data;
  };

  try {
    return await withExponentialBackoff(createAppointment);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
