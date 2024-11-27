import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ProductsGetResponseDTO } from "../../types/products";
type ResponseTypes = ProductsGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (locationId: string, productId: string, authToken: string) => Promise<ResponseTypes> | null;
export default get;
