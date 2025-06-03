import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Blogs } from "../../types/blogs";
type ResponseTypes = Blogs.CreatePostResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: Blogs.CreatePostParams, authToken: string) => Promise<ResponseTypes | null>;
export default create;
