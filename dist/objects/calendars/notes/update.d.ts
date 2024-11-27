import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarBlockSlotCreateSchemaDTO, CalendarGetCreateUpdateNoteSuccessfulResponseDto, CalendarEventDTO, CalendarGetNoteSchemaDTO } from "../../../types/calendars";
type ResponseTypes = CalendarGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (appointmentId: CalendarEventDTO["id"], noteId: CalendarGetNoteSchemaDTO["id"], options: CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
