import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Calendars } from "../../types/calendars";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (calendarId: Calendars.DTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default del;
