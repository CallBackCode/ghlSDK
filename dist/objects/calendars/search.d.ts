import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Calendars } from "../../types/calendars";
type SearchOptions = {
    locationId: string;
    showDrafted?: boolean;
    groupId?: string;
};
type ResponseTypes = Calendars.GetSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
