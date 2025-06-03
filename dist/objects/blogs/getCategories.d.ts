import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Blogs } from "../../types/blogs";
type SearchOptions = {
    locationId: string;
    limit: number;
    offset: number;
};
type ResponseTypes = Blogs.CategoriesResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getCategories: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default getCategories;
