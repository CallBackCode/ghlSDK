import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ContactUpsertSuccessfulResponseDTO, ContactUpsertDTO } from "../../types/contacts";
type ResponseTypes = ContactUpsertSuccessfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const upsert: (options: ContactUpsertDTO, authToken: string) => Promise<ResponseTypes | null>;
export default upsert;
