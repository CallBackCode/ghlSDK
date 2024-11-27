import { BadRequestDTO, SuccededDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccededDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (locationId: string, snippetId: string, authToken: string) => Promise<ResponseTypes> | null;
export default del;
