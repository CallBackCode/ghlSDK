import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import { FunnelsRedirectDeleteResponseDTO } from "../../../types/funnels";
type ResponseTypes = FunnelsRedirectDeleteResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (locationId: string, redirectId: string, authToken: string) => Promise<ResponseTypes> | null;
export default del;
