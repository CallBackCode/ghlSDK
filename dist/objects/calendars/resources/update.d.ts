import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.ResourceResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (resourceId: string, resourceType: Calendars.ResourceTypeDTO, options: Partial<Calendars.CreateResourceDTO & {
    isActive: boolean;
}>, authToken: string) => Promise<ResponseTypes | null>;
export default update;
