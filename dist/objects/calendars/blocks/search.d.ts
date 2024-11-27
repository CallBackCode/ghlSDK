import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGetEventsSuccessfulResponseDTO } from "../../../types/calendars";
type QueryOptions = {
    locationId: string;
    startTime: string;
    endTime: string;
    calendarId?: string;
    groupId?: string;
    userId?: string;
};
type ResponseTypes = CalendarGetEventsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: QueryOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
