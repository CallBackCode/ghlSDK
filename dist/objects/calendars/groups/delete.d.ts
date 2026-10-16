import type { Calendars } from "../../../types/calendars";
import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (groupId: Calendars.Groups.DTO["id"], authToken: string) => Promise<ResponseTypes> | null;
export default del;
