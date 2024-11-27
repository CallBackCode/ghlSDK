import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ProductsPriceUpdateDTO, ProductsPriceUpdateResponseDTO } from "../../../types/products";
type ResponseTypes = ProductsPriceUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (productId: string, priceId: string, options: ProductsPriceUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
