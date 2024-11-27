import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsCustomProviderCreateDTO, PaymentsCustomProviderCreateResponseDTO } from "../../../types/payments";
type ResponseTypes = PaymentsCustomProviderCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (locationId: string, options: PaymentsCustomProviderCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
