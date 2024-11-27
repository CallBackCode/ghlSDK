import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CalendarsGetSuccessfulResponseDTO } from "../../types/calendars";
type SearchOptions = {
    locationId: string;
    showDrafted?: boolean;
    groupId?: string;
};
type ResponseTypes = CalendarsGetSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
