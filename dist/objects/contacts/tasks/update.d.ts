import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactDTO, ContactTaskByIsSuccessfulResponseDTO, ContactTaskDTO, ContactUpdateTaskBodyDTO } from "../../../types/contacts";
type ResponseTypes = ContactTaskByIsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (contactId: ContactDTO["id"], taskId: ContactTaskDTO["id"], options: ContactUpdateTaskBodyDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
