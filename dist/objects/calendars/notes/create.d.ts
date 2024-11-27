import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarBlockSlotCreateSchemaDTO, CalendarGetCreateUpdateNoteSuccessfulResponseDto, CalendarEventDTO } from "../../../types/calendars";
type ResponseTypes = CalendarGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (appointmentId: CalendarEventDTO["id"], options: CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
