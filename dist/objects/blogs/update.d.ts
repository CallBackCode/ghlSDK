import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Blogs } from "../../types/blogs";
type ResponseTypes = Blogs.UpdatePostResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (postId: string, options: Blogs.UpdatePostParams, authToken: string) => Promise<ResponseTypes | null>;
export default update;
