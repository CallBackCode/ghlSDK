import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  LocationsCVDTO,
  LocationsCVResponseDTO,
} from "../../../types/locations";
import { withExponentialBackoff } from "../../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl = "https://services.leadconnectorhq.com/locations";

type ResponseTypes =
  | LocationsCVResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  locationId: string,
  options: LocationsCVDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const createAppointment = async () => {
    const URL = `${baseUrl}/${locationId}/customValues`;
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
