import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Blogs } from "../../types/blogs";
type SearchOptions = {
    locationId: string;
    limit: number;
    offset: number;
};
type ResponseTypes = Blogs.AuthorsResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getAuthors: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default getAuthors;
