import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils"; // Assuming this function is defined

const baseUrl =
  "https://services.leadconnectorhq.com/calendars/events/appointments";

type ResponseTypes =
  | Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  options: Calendars.Appointments.CreateUpdateDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const createAppointment = async () => {
    const URL = `${baseUrl}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
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
