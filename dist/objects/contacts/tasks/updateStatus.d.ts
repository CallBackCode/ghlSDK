import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactDTO, ContactTaskByIsSuccessfulResponseDTO, ContactTaskDTO, ContactUpdateTaskStatusParamsDTO } from "../../../types/contacts";
type ResponseTypes = ContactTaskByIsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (contactId: ContactDTO["id"], taskId: ContactTaskDTO["id"], options: ContactUpdateTaskStatusParamsDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
