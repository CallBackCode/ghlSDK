import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Calendars } from "../../../types/calendars";
type ResponseTypes = Calendars.Groups.ValidateSlugSuccessResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const validateSlug: (options: Calendars.Groups.ValidateSlugPostBodyDTO, authToken: string) => Promise<ResponseTypes> | null;
export default validateSlug;
