import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BusinessDTO } from "../../types/businesses";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (businessId: BusinessDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default del;
