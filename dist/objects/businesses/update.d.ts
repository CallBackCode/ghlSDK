import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Businesses } from "../../types/businesses";
type ResponseTypes = Businesses.CreateUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (businessId: Businesses.DTO["id"], options: Businesses.UpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
