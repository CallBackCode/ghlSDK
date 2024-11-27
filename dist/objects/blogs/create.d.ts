import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BlogsCreatePostParams, BlogsCreatePostResponseDTO } from "../../types/blogs";
type ResponseTypes = BlogsCreatePostResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: BlogsCreatePostParams, authToken: string) => Promise<ResponseTypes | null>;
export default create;
