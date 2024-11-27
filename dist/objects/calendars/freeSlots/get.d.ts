import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import { CalendarDTO, CalendarGetFreeSlotsDTO, CalendarGetSlotsSuccessfulResponseDto } from "../../../types/calendars";
type ResponseTypes = CalendarGetSlotsSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (calendarId: CalendarDTO["id"], options: CalendarGetFreeSlotsDTO, authToken: string) => Promise<ResponseTypes> | null;
export default get;
