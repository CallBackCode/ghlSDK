import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { PaymentsCustomProviderCreateResponseDTO } from "../../../../types/payments";
type ResponseTypes = PaymentsCustomProviderCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
