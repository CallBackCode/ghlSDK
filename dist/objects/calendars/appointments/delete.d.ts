import type { Calendars } from "../../../types/calendars";
import { BadRequestDTO, SuccededDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccededDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (eventId: Calendars.Events.DTO["id"], authToken: string) => Promise<ResponseTypes> | null;
export default del;
