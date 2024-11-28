import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CalendarByIdSuccessfulResponseDTO, CalendarCreateDTO } from "../../types/calendars";
type ResponseTypes = CalendarByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: CalendarCreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
