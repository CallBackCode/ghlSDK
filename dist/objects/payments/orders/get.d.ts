import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsOrderGetResponseDTO, PaymentsOrderFullfillmentsGetOptions } from "../../../types/payments";
type ResponseTypes = PaymentsOrderGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (orderId: string, options: PaymentsOrderFullfillmentsGetOptions, authToken: string) => Promise<ResponseTypes> | null;
export default get;
