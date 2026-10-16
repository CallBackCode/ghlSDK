import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: Calendars.Appointments.CreateUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
