import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { UsersGetResponseDTO } from "../../types/users";
type ResponseTypes = UsersGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const listByLocation: (companyId: string, locationId: string, authToken: string) => Promise<ResponseTypes | null>;
export default listByLocation;
