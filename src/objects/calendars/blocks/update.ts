import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarBlockSlotEditSchemaDTO,
  CalendarAppointmentSchemaResponseDTO,
  CalendarEventDTO,
} from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/calendars/events/block-slots";

type ResponseTypes =
  | CalendarAppointmentSchemaResponseDTO
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  eventId: CalendarEventDTO["id"],
  options: CalendarBlockSlotEditSchemaDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const updateSlot = async () => {
    const URL = `${baseUrl}/${eventId}`;
    const response = await fetch(URL, {
      method: "PUT",
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
    return await withExponentialBackoff(updateSlot);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
