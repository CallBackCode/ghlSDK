import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { LinksSearchResponseDTO } from "../../types/triggerLinks";
type ResponseTypes = LinksSearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: {
    locationId: string;
}, authToken: string) => Promise<ResponseTypes | null>;
export default search;
