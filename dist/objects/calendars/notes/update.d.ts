import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { ContactNotesDTO } from "../../../types/contacts";
type ResponseTypes = Calendars.GetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (appointmentId: Calendars.Events.DTO["id"], noteId: Calendars.GetNoteSchemaDTO["id"], options: ContactNotesDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
