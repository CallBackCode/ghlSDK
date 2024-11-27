import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { FunnelsListResponseDTO } from "../../types/funnels";
type SearchOptions = {
    locationId: string;
    category?: string;
    limit?: string;
    name?: string;
    offset?: string;
    parentId?: string;
    type?: string;
};
type ResponseTypes = FunnelsListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const listFunnels: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default listFunnels;
