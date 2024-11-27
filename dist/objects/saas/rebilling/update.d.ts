import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { SaasRebillingUpdateDTO } from "../../../types/saas";
type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (companyId: string, options: SaasRebillingUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
