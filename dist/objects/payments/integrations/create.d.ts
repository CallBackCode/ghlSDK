import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsWLProviderCreateDTO, PaymentsWLProviderCreateResponseDTO } from "../../../types/payments";
type ResponseTypes = PaymentsWLProviderCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: PaymentsWLProviderCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
