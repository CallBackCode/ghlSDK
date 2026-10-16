import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Objects } from "../../types/objects";
type ResponseTypes = Objects.UpdateResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (params: Objects.UpdateParams, body: Objects.UpdateBody, authToken: string) => Promise<ResponseTypes | null>;
export default update;
