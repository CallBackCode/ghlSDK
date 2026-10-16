import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Calendars } from "../../types/calendars";
type ResponseTypes = Calendars.ByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (calendarId: Calendars.DTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
