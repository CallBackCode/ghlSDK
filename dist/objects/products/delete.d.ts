import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { ProductsDeleteResponseDTO } from "../../types/products";
type ResponseTypes = ProductsDeleteResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (locationId: string, productId: string, authToken: string) => Promise<ResponseTypes> | null;
export default del;
