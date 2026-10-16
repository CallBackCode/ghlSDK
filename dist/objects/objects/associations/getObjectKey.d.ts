import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { Objects } from "../../../types/objects";
type ResponseTypes = Objects.Associations.GetObjectKeyResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getObjectKey: (params: Objects.Associations.GetObjectKeyParams, authToken: string) => Promise<ResponseTypes | null>;
export default getObjectKey;
