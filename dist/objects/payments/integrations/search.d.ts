import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { PaymentsWLProviderListResponseDTO } from "../../../types/payments";
type SearchOptions = {
    altId: string;
    altType: "location";
    limit?: number;
    offset?: number;
};
type ResponseTypes = PaymentsWLProviderListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
