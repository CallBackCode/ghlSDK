import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { WorkflowsSearchResponseDTO } from "../../types/workflows";
type ResponseTypes = WorkflowsSearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: string, authToken: string) => Promise<ResponseTypes | null>;
export default search;
