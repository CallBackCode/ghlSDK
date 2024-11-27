import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { PaymentsFullfillmentListResponseDTO } from "../../../../types/payments";
type SearchOptions = {
    altId: string;
    altType: string;
};
type ResponseTypes = PaymentsFullfillmentListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const list: (orderId: string, options: SearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default list;
