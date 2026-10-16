import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Associations.UpdateResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (params: Objects.Associations.UpdateParams, body: Objects.Associations.UpdateBody, authToken: string) => Promise<ResponseTypes | null>;
export default update;
