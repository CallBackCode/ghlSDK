import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SaasSubscriptionEnableDTO } from "../../types/saas";
type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const enable: (locationId: string, options: SaasSubscriptionEnableDTO, authToken: string) => Promise<ResponseTypes> | null;
export default enable;
