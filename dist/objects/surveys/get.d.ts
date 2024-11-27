import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { SuverysGetResponseSchema } from "../../types/surveys";
type SearchParams = {
    locationId: string;
    type?: string;
    limit?: number;
    skip?: number;
};
type ResponseTypes = SuverysGetResponseSchema | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (options: SearchParams, authToken: string) => Promise<ResponseTypes> | null;
export default get;
