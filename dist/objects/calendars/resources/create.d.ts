import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.ResourceResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (resourceType: Calendars.ResourceTypeDTO, options: Calendars.CreateResourceDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
