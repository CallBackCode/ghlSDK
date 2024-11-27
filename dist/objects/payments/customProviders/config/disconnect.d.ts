import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { PaymentsCustomProviderDeleteResponseDTO, PaymentsCustomProviderDisconnectResponseDTO } from "../../../../types/payments";
type ResponseTypes = PaymentsCustomProviderDisconnectResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const disconnect: (locationId: string, options: PaymentsCustomProviderDeleteResponseDTO, authToken: string) => Promise<ResponseTypes> | null;
export default disconnect;
