import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ContactCreateWorkflowDTO, ContactsWorkflowSuccessfulResponseDTO } from "../../../types/contacts";
type ResponseTypes = ContactsWorkflowSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const add: (contactId: string, workflowId: string, options: ContactCreateWorkflowDTO, authToken: string) => Promise<ResponseTypes | null>;
export default add;
