import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarAppointmentCreateUpdateSchemaDTO, CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO } from "../../../types/calendars";
type ResponseTypes = CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: CalendarAppointmentCreateUpdateSchemaDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
