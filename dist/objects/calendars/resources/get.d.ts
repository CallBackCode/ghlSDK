import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.ResourceDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (resourceId: string, resourceType: Calendars.ResourceTypeDTO, authToken: string) => Promise<ResponseTypes> | null;
export default get;
