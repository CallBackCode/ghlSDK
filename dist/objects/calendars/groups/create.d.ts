import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarGroupCreateDTO, CalendarGroupCreateSuccessfulResponseDTO } from "../../../types/calendars";
type ResponseTypes = CalendarGroupCreateSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: CalendarGroupCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
