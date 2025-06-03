import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Businesses } from "../../types/businesses";
type ResponseTypes = Businesses.GetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (businessId: Businesses.DTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
