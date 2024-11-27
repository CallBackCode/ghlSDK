import { CalendarResourceTypeDTO } from "../../../types/calendars";
import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (resourceId: string, resourceType: CalendarResourceTypeDTO, authToken: string) => Promise<ResponseTypes> | null;
export default del;
