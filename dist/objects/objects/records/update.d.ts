import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Records.UpdateResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (params: Objects.Records.UpdateParams, body: Objects.Records.UpdateBody, authToken: string) => Promise<ResponseTypes | null>;
export default update;
