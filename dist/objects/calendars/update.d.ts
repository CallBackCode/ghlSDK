import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Calendars } from "../../types/calendars";
type ResponseTypes = Calendars.ByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (calendarId: Calendars.DTO["id"], options: Calendars.UpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
