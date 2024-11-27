import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { FunnelsRedirectUpdateParams, FunnelsRedirectUpdateResponseDTO } from "../../../types/funnels";
type ResponseTypes = FunnelsRedirectUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (redirectId: string, options: FunnelsRedirectUpdateParams, authToken: string) => Promise<ResponseTypes> | null;
export default update;
