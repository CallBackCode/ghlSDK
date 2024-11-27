import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { OpportunitiesCreateDTO, OpportunitiesCreateResponseDTO } from "../../types/opportunities";
type ResponseTypes = OpportunitiesCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: OpportunitiesCreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
