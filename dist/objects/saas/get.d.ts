import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SaasSubscriptionGetResponseDTO, SaasSubscriptionUpdateDTO } from "../../types/saas";
type ResponseTypes = SaasSubscriptionGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (options: SaasSubscriptionUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default get;
