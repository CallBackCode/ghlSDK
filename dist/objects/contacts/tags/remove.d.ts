import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactTagsDTO } from "../../../types/contacts";
type ResponseTypes = ContactTagsDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const remove: (contactId: string, options: ContactTagsDTO, authToken: string) => Promise<ResponseTypes | null>;
export default remove;
