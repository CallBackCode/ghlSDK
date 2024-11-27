import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { FunnelsRedirectCreateParams, FunnelsRedirectCreateResponseDTO } from "../../../types/funnels";
type ResponseTypes = FunnelsRedirectCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: FunnelsRedirectCreateParams, authToken: string) => Promise<ResponseTypes> | null;
export default create;
