import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Associations.GetKeyNameResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getKeyName: (params: Objects.Associations.GetKeyNameParams, authToken: string) => Promise<ResponseTypes | null>;
export default getKeyName;
