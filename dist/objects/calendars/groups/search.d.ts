import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGroupDTO, CalendarAllGroupsSuccessfulResponseDTO } from "../../../types/calendars";
type ResponseTypes = CalendarAllGroupsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: CalendarGroupDTO["locationId"], authToken: string) => Promise<ResponseTypes> | null;
export default search;
