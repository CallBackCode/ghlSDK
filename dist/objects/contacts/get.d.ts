import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactDTO, ContactByIdSuccessfulResponseDTO } from "../../types/contacts";
type ResponseTypes = ContactByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (contactId: ContactDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
