import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGroupUpdateDTO, CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO, CalendarGroupDTO } from "../../../types/calendars";
type ResponseTypes = CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (groupId: CalendarGroupDTO["id"], options: CalendarGroupUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
