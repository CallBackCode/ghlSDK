import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { OpportunitiesCreateResponseDTO, OpportunitiesUpdateStatusDTO } from "../../types/opportunities";
type ResponseTypes = OpportunitiesCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const updateStatus: (opportunityId: string, options: OpportunitiesUpdateStatusDTO, authToken: string) => Promise<ResponseTypes | null>;
export default updateStatus;
