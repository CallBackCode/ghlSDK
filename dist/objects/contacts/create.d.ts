import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactByIdSuccessfulResponseDTO, ContactCreateDTO } from "../../types/contacts";
type ResponseTypes = ContactByIdSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: ContactCreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
