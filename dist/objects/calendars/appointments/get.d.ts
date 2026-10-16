import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = {
    event: Calendars.Events.DTO;
} | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (calendarId: Calendars.Events.DTO["id"], authToken: string) => Promise<ResponseTypes> | null;
export default get;
