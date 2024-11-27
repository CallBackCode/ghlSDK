import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LinksDTO, LinksGetResponseDTO } from "../../types/triggerLinks";
type ResponseTypes = LinksGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: LinksDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
