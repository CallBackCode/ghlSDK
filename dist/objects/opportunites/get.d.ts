import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { OpportunitiesCreateResponseDTO } from "../../types/opportunities";
type ResponseTypes = OpportunitiesCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (opportuniyId: string, authToken: string) => Promise<ResponseTypes | null>;
export default get;
