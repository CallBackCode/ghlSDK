import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BlogsAuthorsResponseDTO } from "../../types/blogs";
type SearchOptions = {
    locationId: string;
    limit: number;
    offset: number;
};
type ResponseTypes = BlogsAuthorsResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getAuthors: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default getAuthors;
