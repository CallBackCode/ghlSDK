import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SaasSubscriptionBulkDisableDTO } from "../../types/saas";
type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const disable: (companyId: string, options: SaasSubscriptionBulkDisableDTO, authToken: string) => Promise<ResponseTypes> | null;
export default disable;
