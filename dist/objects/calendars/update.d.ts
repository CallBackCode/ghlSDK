import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CalendarByIdSuccessfulResponseDTO, CalendarCreateUpdateDTO, CalendarDTO } from "../../types/calendars";
type ResponseTypes = CalendarByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (calendarId: CalendarDTO["id"], options: CalendarCreateUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
