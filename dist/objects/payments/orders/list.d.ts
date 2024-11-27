import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsOrderListResponseDTO, PaymentsOrderFullfillmentsSearchOptions } from "../../../types/payments";
type ResponseTypes = PaymentsOrderListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const list: (options: PaymentsOrderFullfillmentsSearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default list;
