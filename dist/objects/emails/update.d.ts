import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { EmailsBuilderUpdateSuccessfulDTO, EmailsSaveBuilderDataDTO } from "../../types/emails";
type ResponseTypes = EmailsBuilderUpdateSuccessfulDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (options: EmailsSaveBuilderDataDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
