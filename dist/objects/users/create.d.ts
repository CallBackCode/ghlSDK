import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UsersCreateDTO, UsersResponseDTO } from "../../types/users";
type ResponseTypes = UsersResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: UsersCreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
