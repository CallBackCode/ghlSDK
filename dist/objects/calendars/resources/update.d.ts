import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarCreateResourceDTO, CalendarResourceResponseDTO, CalendarResourceTypeDTO } from "../../../types/calendars";
type ResponseTypes = CalendarResourceResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (resourceId: string, resourceType: CalendarResourceTypeDTO, options: Partial<CalendarCreateResourceDTO & {
    isActive: boolean;
}>, authToken: string) => Promise<ResponseTypes | null>;
export default update;
