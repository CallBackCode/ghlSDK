import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { Objects } from "../../../../types/objects";
type ResponseTypes = Objects.Associations.Relations.DeleteResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (params: Objects.Associations.Relations.DeleteParams, authToken: string) => Promise<ResponseTypes | null>;
export default del;
