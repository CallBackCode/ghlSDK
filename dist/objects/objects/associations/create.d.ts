import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Associations.CreateResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: Objects.Associations.CreateBody, authToken: string) => Promise<ResponseTypes | null>;
export default create;
