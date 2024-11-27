import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactGetCreateUpdateNoteSuccessfulResponseDto, ContactNotesDTO, ContactDTO } from "../../../types/contacts";
type ResponseTypes = ContactGetCreateUpdateNoteSuccessfulResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (contactId: ContactDTO["id"], options: ContactNotesDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
