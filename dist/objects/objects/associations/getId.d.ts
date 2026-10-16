import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Associations.GetIdResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getId: (params: Objects.Associations.GetIdParams, authToken: string) => Promise<ResponseTypes | null>;
export default getId;
