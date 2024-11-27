import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { FunnelsPageCountResponseDTO } from "../../types/funnels";
type SearchOptions = {
    locationId: string;
    funnelId: string;
    name?: string;
};
type ResponseTypes = FunnelsPageCountResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const countPages: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default countPages;
