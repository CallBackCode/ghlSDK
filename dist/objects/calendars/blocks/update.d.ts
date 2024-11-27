import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarBlockSlotEditSchemaDTO, CalendarAppointmentSchemaResponseDTO, CalendarEventDTO } from "../../../types/calendars";
type ResponseTypes = CalendarAppointmentSchemaResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (eventId: CalendarEventDTO["id"], options: CalendarBlockSlotEditSchemaDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
