import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../../types/_global";
import type { Objects } from "../../../../types/objects";
type ResponseTypes = Objects.Associations.Relations.CreateResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (body: Objects.Associations.Relations.CreateBody, authToken: string) => Promise<ResponseTypes | null>;
export default create;
