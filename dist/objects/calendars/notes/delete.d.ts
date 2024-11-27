import { CalendarEventDTO, CalendarGetNoteSchemaDTO } from "../../../types/calendars";
import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (appointmentId: CalendarEventDTO["id"], noteId: CalendarGetNoteSchemaDTO["id"], authToken: string) => Promise<ResponseTypes> | null;
export default del;
