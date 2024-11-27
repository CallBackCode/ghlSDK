import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ProductsPriceListResponseDTO } from "../../../types/products";
type SearchParams = {
    locationId: string;
    ids?: string;
    limit?: number;
    offset?: number;
};
type ResponseTypes = ProductsPriceListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (productId: string, options: SearchParams, authToken: string) => Promise<ResponseTypes> | null;
export default search;
