import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CalendarDTO, CalendarByIdSuccessfulResponseDTO } from "../../types/calendars";
type ResponseTypes = CalendarByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (calendarId: CalendarDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
