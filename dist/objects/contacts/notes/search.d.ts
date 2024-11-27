import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactDTO, ContactGetCreateUpdateNoteSuccessfulResponseDto } from "../../../types/contacts";
type ResponseTypes = ContactGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (contactId: ContactDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default search;
