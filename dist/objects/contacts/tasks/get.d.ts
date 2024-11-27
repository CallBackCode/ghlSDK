import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactDTO, ContactTaskDTO, ContactTaskByIsSuccessfulResponseDTO } from "../../../types/contacts";
type ResponseTypes = ContactTaskByIsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (contactId: ContactDTO["id"], taskId: ContactTaskDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
