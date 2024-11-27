import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BlogsCheckUrlSlugResponseDTO } from "../../types/blogs";
type SearchOptions = {
    locationId: string;
    urlSlug: string;
    postId?: string;
};
type ResponseTypes = BlogsCheckUrlSlugResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const checkSlug: (options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default checkSlug;
