import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { PaymentsFullfillmentCreateDTO, PaymentsFullfillmentCreateResponseDTO } from "../../../../types/payments";
type ResponseTypes = PaymentsFullfillmentCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (orderId: string, options: PaymentsFullfillmentCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
