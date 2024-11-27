import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { FunnelsRedirectListResponseDTO } from "../../../types/funnels";
type SearchOptions = {
    locationId: string;
    limit: number;
    offset: number;
    search?: string;
};
type ResponseTypes = FunnelsRedirectListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
