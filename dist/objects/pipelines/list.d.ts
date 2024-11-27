import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { PipelinesGetResponseDTO } from "../../types/pipelines";
type ResponseTypes = PipelinesGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const list: (locationId: string, authToken: string) => Promise<ResponseTypes | null>;
export default list;
