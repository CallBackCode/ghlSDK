import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
import { ContactNotesDTO } from "../../../types/contacts";
type ResponseTypes = Calendars.GetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (appointmentId: Calendars.Events.DTO["id"], options: ContactNotesDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
