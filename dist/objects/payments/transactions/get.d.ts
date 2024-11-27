import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsTxnGetResponseDTO } from "../../../types/payments";
type SearchOptions = {
    altId: string;
    altType: string;
    locationId?: string;
};
type ResponseTypes = PaymentsTxnGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (transactionId: string, options: SearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default get;
