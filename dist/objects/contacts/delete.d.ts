import { BadRequestDTO, SuccededDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactDTO } from "../../types/contacts";
type ResponseTypes = SuccededDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (contactId: ContactDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default del;
