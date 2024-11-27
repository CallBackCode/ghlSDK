import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { CampaignsSuccessfulResponseDto } from "../../types/campaigns";
type SearchOptions = {
    locationId: string;
    status?: string;
};
type ResponseTypes = CampaignsSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
