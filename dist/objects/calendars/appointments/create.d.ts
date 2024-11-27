import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarBlockSlotCreateSchemaDTO, CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO } from "../../../types/calendars";
type ResponseTypes = CalendarCreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: CalendarBlockSlotCreateSchemaDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
