import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Associations.GetResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (params: Objects.Associations.GetParams, authToken: string) => Promise<ResponseTypes | null>;
export default get;
