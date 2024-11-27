import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGetCreateUpdateNoteSuccessfulResponseDto, CalendarEventDTO } from "../../../types/calendars";
import { ContactNotesDTO } from "../../../types/contacts";
type ResponseTypes = CalendarGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (appointmentId: CalendarEventDTO["id"], options: ContactNotesDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
