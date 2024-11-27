import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactAddFollowersSuccessfulResponseDTO, ContactFollowersDTO } from "../../../types/contacts";
type ResponseTypes = ContactAddFollowersSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const add: (contactId: string, options: ContactFollowersDTO, authToken: string) => Promise<ResponseTypes | null>;
export default add;
