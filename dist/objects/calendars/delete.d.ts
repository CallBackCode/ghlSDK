import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CalendarDTO } from "../../types/calendars";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (calendarId: CalendarDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default del;
