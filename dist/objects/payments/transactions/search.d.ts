import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsTransactionsSearchOptions, PaymentsTxnListResponseDTO } from "../../../types/payments";
type ResponseTypes = PaymentsTxnListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: PaymentsTransactionsSearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default search;
