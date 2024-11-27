import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactSearchOptions, ContactSearchSuccessResponseDTO } from "../../types/contacts";
type ResponseTypes = ContactSearchSuccessResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: ContactSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
