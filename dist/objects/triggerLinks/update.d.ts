import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LinksGetResponseDTO, LinksUpdateDTO } from "../../types/triggerLinks";
type ResponseTypes = LinksGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (linkId: string, options: LinksUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
