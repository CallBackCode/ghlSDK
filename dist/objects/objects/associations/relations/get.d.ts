import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { Objects } from "../../../../types/objects";
type ResponseTypes = Objects.Associations.Relations.GetResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getAll: (params: Objects.Associations.Relations.GetParams, authToken: string) => Promise<ResponseTypes | null>;
export default getAll;
