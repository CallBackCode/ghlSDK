import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.CreateUpdateBlockedSlotSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (eventId: Calendars.Events.DTO["id"], options: Partial<Calendars.Appointments.CreateUpdateDTO>, authToken: string) => Promise<ResponseTypes> | null;
export default update;
