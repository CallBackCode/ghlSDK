import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactDeleteFollowersSuccessfulResponseDTO, ContactFollowersDTO } from "../../../types/contacts";
type ResponseTypes = ContactDeleteFollowersSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const remove: (contactId: string, options: ContactFollowersDTO, authToken: string) => Promise<ResponseTypes | null>;
export default remove;
