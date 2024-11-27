import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { FunnelsPageResponseDTO } from "../../types/funnels";
type SearchOptions = {
    locationId: string;
    funnelId: string;
    limit: number;
    offset: number;
    name?: string;
};
type ResponseTypes = FunnelsPageResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const listPages: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default listPages;
