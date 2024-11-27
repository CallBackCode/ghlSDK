import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarResourceDTO, CalendarResourceTypeDTO } from "../../../types/calendars";
type QueryOptions = {
    locationId: CalendarResourceDTO["locationId"];
    limit: number;
    skip: number;
};
type ResponseTypes = CalendarResourceDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (resourceType: CalendarResourceTypeDTO[], options: QueryOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
