import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UsersDeleteDTO } from "../../types/users";
type ResponseTypes = UsersDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (userId: string, authToken: string) => Promise<ResponseTypes | null>;
export default del;
