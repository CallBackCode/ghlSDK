import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactGetCreateUpdateNoteSuccessfulResponseDto, ContactDTO, ContactNotesDTO, ContactGetNoteDTO } from "../../../types/contacts";
type ResponseTypes = ContactGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (contactId: ContactDTO["id"], noteId: ContactGetNoteDTO["id"], options: ContactNotesDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
