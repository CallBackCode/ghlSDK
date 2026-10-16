import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type QueryOptions = {
    locationId: Calendars.ResourceDTO["locationId"];
    limit: number;
    skip: number;
};
type ResponseTypes = Calendars.ResourceDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (resourceType: Calendars.ResourceTypeDTO[], options: QueryOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
