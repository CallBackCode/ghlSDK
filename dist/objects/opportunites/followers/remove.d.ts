import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { OpportunitiesFollowersDTO, OpportunitiesRemoveFollowersResponseDTO } from "../../../types/opportunities";
type ResponseTypes = OpportunitiesRemoveFollowersResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const remove: (opportunityId: string, options: OpportunitiesFollowersDTO, authToken: string) => Promise<ResponseTypes | null>;
export default remove;
