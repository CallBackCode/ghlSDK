import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { OpportunitiesCreateResponseDTO, OpportunityUpdateDTO } from "../../types/opportunities";
type ResponseTypes = OpportunitiesCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (opportunityId: string, options: OpportunityUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
