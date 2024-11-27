import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { EmailsCreateBuilderDTO, EmailsCreateBuilderSuccesfulResponseDTO } from "../../types/emails";
type ResponseTypes = EmailsCreateBuilderSuccesfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: EmailsCreateBuilderDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
