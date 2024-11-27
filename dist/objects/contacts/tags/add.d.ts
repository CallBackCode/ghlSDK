import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactTagsDTO } from "../../../types/contacts";
type ResponseTypes = ContactTagsDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const add: (contactId: string, options: ContactTagsDTO, authToken: string) => Promise<ResponseTypes | null>;
export default add;
