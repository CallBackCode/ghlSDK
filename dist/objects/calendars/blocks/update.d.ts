import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.Appointments.ResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (eventId: Calendars.Events.DTO["id"], options: Calendars.BlockSlotEditSchemaDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
