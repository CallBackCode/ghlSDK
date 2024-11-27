import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ProductsCreateDTO, ProductsCreateResponseDTO } from "../../types/products";
type ResponseTypes = ProductsCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: ProductsCreateDTO, authToken: string) => Promise<ResponseTypes> | null;
export default create;
