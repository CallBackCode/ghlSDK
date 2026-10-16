import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Records.DeleteResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (params: Objects.Records.DeleteParams, authToken: string) => Promise<ResponseTypes | null>;
export default del;
