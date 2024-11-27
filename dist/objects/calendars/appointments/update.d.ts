import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarAppointmentCreateUpdateSchemaDTO, CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO, CalendarEventDTO } from "../../../types/calendars";
type ResponseTypes = CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (eventId: CalendarEventDTO["id"], options: Partial<CalendarAppointmentCreateUpdateSchemaDTO>, authToken: string) => Promise<ResponseTypes> | null;
export default update;
