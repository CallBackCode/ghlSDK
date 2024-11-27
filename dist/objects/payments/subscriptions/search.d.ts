import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsSubscriptionListResponseDTO, PaymentsSubscriptionsSearchOptions } from "../../../types/payments";
type ResponseTypes = PaymentsSubscriptionListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: PaymentsSubscriptionsSearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
