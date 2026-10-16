import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (groupId: Calendars.Groups.DTO["id"], options: Calendars.Groups.UpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
