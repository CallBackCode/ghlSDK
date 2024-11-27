import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { OpportunitiesAddFollowersResponseDTO, OpportunitiesFollowersDTO } from "../../../types/opportunities";
type ResponseTypes = OpportunitiesAddFollowersResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const add: (opportunityId: string, options: OpportunitiesFollowersDTO, authToken: string) => Promise<ResponseTypes | null>;
export default add;
