import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { BlogsUpdatePostParams, BlogsUpdatePostResponseDTO } from "../../types/blogs";
type ResponseTypes = BlogsUpdatePostResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (postId: string, options: BlogsUpdatePostParams, authToken: string) => Promise<ResponseTypes | null>;
export default update;
