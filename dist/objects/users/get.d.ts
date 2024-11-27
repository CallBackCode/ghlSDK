import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UsersResponseDTO } from "../../types/users";
type ResponseTypes = UsersResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (userId: string, authToken: string) => Promise<ResponseTypes | null>;
export default get;
