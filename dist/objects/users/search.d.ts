import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UsersSearchOptions, UsersSearchResponseDTO } from "../../types/users";
type ResponseTypes = UsersSearchResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: UsersSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
