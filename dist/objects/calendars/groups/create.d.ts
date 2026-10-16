import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.Groups.CreateSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: Calendars.Groups.CreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
