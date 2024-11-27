import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UsersResponseDTO, UsersUpdateDTO } from "../../types/users";
type ResponseTypes = UsersResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (userId: string, options: UsersUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
