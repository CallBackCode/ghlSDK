import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { CalendarValidateGroupSlugPostBodyDTO, CalendarValidateGroupSlugSuccessResponseDTO } from "../../../types/calendars";
type ResponseTypes = CalendarValidateGroupSlugSuccessResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const validateSlug: (options: CalendarValidateGroupSlugPostBodyDTO, authToken: string) => Promise<ResponseTypes> | null;
export default validateSlug;
