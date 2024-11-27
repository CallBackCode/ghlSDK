import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { OpportunitiesUpsertDTO, OpportunitiesUpsertResponseDTO } from "../../types/opportunities";
type ResponseTypes = OpportunitiesUpsertResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const upsert: (options: OpportunitiesUpsertDTO, authToken: string) => Promise<ResponseTypes | null>;
export default upsert;
