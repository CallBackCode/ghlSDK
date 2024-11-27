import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactUpdateSuccessfulResponseDTO, ContactDTO, ContactUpdateDTO } from "../../types/contacts";
type ResponseTypes = ContactUpdateSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (contactId: ContactDTO["id"], options: ContactUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
