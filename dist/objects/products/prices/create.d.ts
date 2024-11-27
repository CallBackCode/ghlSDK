import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ProductsPriceCreateDTO, ProductsPriceCreateResponseDTO } from "../../../types/products";
type ResponseTypes = ProductsPriceCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (productId: string, options: ProductsPriceCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
