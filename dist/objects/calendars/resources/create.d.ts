import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarCreateResourceDTO, CalendarResourceResponseDTO, CalendarResourceTypeDTO } from "../../../types/calendars";
type ResponseTypes = CalendarResourceResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (resourceType: CalendarResourceTypeDTO, options: CalendarCreateResourceDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
