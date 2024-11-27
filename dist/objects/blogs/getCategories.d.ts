import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BlogsCategoriesResponseDTO } from "../../types/blogs";
type SearchOptions = {
    locationId: string;
    limit: number;
    offset: number;
};
type ResponseTypes = BlogsCategoriesResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getCategories: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default getCategories;
