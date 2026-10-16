import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Calendars } from "../../types/calendars";
type ResponseTypes = Calendars.ByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: Calendars.CreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
