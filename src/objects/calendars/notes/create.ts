import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  CalendarGetCreateUpdateNoteSuccessfulResponseDto,
  CalendarEventDTO,
} from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";
import { ContactNotesDTO } from "../../../types/contacts";

const baseUrl = "https://services.leadconnectorhq.com/calendars/appointments";

type ResponseTypes =
  | CalendarGetCreateUpdateNoteSuccessfulResponseDto
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const create = async (
  appointmentId: CalendarEventDTO["id"],
  options: ContactNotesDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${appointmentId}/notes`;

  const createNote = async () => {
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
    return await withExponentialBackoff(createNote);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default create;
