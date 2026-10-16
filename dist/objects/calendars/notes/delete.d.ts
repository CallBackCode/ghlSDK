import type { Calendars } from "../../../types/calendars";
import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (appointmentId: Calendars.Events.DTO["id"], noteId: Calendars.GetNoteSchemaDTO["id"], authToken: string) => Promise<ResponseTypes> | null;
export default del;
