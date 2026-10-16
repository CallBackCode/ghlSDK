import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.Slots.GetSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (calendarId: Calendars.DTO["id"], options: Calendars.Slots.GetFreeDTO, authToken: string) => Promise<ResponseTypes> | null;
export default get;
