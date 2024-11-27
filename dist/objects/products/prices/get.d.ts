import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ProductsPriceGetResponseDTO } from "../../../types/products";
type ResponseTypes = ProductsPriceGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
