import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Businesses } from "../../types/businesses";
type ResponseTypes = Businesses.CreateUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: Businesses.CreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
