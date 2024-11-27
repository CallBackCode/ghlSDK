import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { OpportunitiesSearchOptions, OpportunitiesSearchResponseDTO } from "../../types/opportunities";
type ResponseTypes = OpportunitiesSearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: OpportunitiesSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
