import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGetEventSuccessfulResponseDTO, CalendarEventDTO } from "../../../types/calendars";
type ResponseTypes = CalendarGetEventSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (calendarId: CalendarEventDTO["id"], authToken: string) => Promise<ResponseTypes> | null;
export default get;
