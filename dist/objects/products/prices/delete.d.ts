import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import { ProductsPriceDeleteResponseDTO } from "../../../types/products";
type ResponseTypes = ProductsPriceDeleteResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (locationId: string, productId: string, priceId: string, authToken: string) => Promise<ResponseTypes> | null;
export default del;
