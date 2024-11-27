import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SaasSubscriptionPauseLocationDTO } from "../../types/saas";
type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const pause: (locationId: string, options: SaasSubscriptionPauseLocationDTO, authToken: string) => Promise<ResponseTypes> | null;
export default pause;
