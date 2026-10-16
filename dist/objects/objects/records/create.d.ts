import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Records.CreateResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (params: Objects.Records.CreateParams, body: Objects.Records.CreateBody, authToken: string) => Promise<ResponseTypes | null>;
export default create;
