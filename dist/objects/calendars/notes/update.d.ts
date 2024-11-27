import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGetCreateUpdateNoteSuccessfulResponseDto, CalendarEventDTO, CalendarGetNoteSchemaDTO } from "../../../types/calendars";
import { ContactNotesDTO } from "../../../types/contacts";
type ResponseTypes = CalendarGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (appointmentId: CalendarEventDTO["id"], noteId: CalendarGetNoteSchemaDTO["id"], options: ContactNotesDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
