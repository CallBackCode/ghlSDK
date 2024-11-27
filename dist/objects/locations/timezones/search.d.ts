import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = any | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (locationId: string, authToken: string) => Promise<ResponseTypes> | null;
export default search;
