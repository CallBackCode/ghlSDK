import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { Objects } from "../../types/objects";
type ResponseTypes = Objects.SearchResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (params: Objects.SearchParams, authToken: string) => Promise<ResponseTypes | null>;
export default search;
