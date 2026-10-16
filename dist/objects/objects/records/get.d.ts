import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Records.GetResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (params: Objects.Records.GetParams, authToken: string) => Promise<ResponseTypes | null>;
export default get;
