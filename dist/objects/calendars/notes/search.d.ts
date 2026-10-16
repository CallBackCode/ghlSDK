import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type QueryOptions = {
    limit: number;
    offset: number;
};
type ResponseTypes = Calendars.GetNotesDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (appointmentId: Calendars.Events.DTO["id"], options: QueryOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
