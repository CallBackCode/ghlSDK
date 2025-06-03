import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ProductsListResponseDTO } from "../../types/products";
type SearchOptions = {
    limit?: string;
    offset?: string;
    search?: string;
    locationId: string;
};
type ResponseTypes = ProductsListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const list: (options: SearchOptions, authToken: string) => Promise<ResponseTypes> | null;
export default list;
