import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ProductsUpdateDTO, ProductsUpdateResponseDTO } from "../../types/products";
type ResponseTypes = ProductsUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (productId: string, options: ProductsUpdateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default update;
