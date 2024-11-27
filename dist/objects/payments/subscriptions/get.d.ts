import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsSubscriptionGetResponseDTO } from "../../../types/payments";
type SearchOptions = {
    altId: string;
    altType: string;
};
type ResponseTypes = PaymentsSubscriptionGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (subscriptionId: string, options: SearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default get;
