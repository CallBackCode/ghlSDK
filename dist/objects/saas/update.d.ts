import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SaasSubscriptionUpdateDTO } from "../../types/saas";
type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (locationId: string, options: SaasSubscriptionUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
