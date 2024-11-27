import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarEventDTO, CalendarGetNotesDTO } from "../../../types/calendars";
type QueryOptions = {
    limit: number;
    offset: number;
};
type ResponseTypes = CalendarGetNotesDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (appointmentId: CalendarEventDTO["id"], options: QueryOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
