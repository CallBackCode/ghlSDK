import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { withExponentialBackoff } from "../../../contexts/requestUtils";
import { ContactNotesDTO } from "../../../types/contacts";

const baseUrl = "https://services.leadconnectorhq.com/calendars/appointments";

type ResponseTypes =
  | Calendars.GetCreateUpdateNoteSuccessfulResponseDto
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const update = async (
  appointmentId: Calendars.Events.DTO["id"],
  noteId: Calendars.GetNoteSchemaDTO["id"],
  options: ContactNotesDTO,
  authToken: string
): Promise<ResponseTypes> | null => {
  const URL = `${baseUrl}/${appointmentId}/notes/${noteId}`;

  const updateNote = async () => {
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
    return await withExponentialBackoff(updateNote);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default update;
