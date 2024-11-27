import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { PaymentsCustomProviderConnectSchema, PaymentsCustomProviderCreateResponseDTO } from "../../../../types/payments";
type ResponseTypes = PaymentsCustomProviderCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (locationId: string, options: PaymentsCustomProviderConnectSchema, authToken: string) => Promise<ResponseTypes> | null;
export default create;
