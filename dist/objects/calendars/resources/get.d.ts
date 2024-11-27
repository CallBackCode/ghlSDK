import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarResourceDTO, CalendarResourceTypeDTO } from "../../../types/calendars";
type ResponseTypes = CalendarResourceDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (resourceId: string, resourceType: CalendarResourceTypeDTO, authToken: string) => Promise<ResponseTypes> | null;
export default get;
