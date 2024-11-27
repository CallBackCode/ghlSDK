import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BusinessDTO, BusinessGetResponseDTO } from "../../types/businesses";
type ResponseTypes = BusinessGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (businessId: BusinessDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
