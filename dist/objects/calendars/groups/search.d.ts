import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.Groups.AllSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: Calendars.Groups.DTO["locationId"], authToken: string) => Promise<ResponseTypes> | null;
export default search;
