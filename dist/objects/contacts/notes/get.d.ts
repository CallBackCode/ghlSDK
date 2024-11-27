import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactDTO, ContactGetCreateUpdateNoteSuccessfulResponseDto, ContactGetNoteDTO } from "../../../types/contacts";
type ResponseTypes = ContactGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (contactId: ContactDTO["id"], noteId: ContactGetNoteDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
