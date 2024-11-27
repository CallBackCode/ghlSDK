import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactCreateTaskParamsDTO, ContactDTO, ContactTaskByIsSuccessfulResponseDTO } from "../../../types/contacts";
type ResponseTypes = ContactTaskByIsSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (contactId: ContactDTO["id"], options: ContactCreateTaskParamsDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
