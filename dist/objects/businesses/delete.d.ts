import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Businesses } from "../../types/businesses";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (businessId: Businesses.DTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default del;
