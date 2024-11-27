import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import { EmailsDeleteBuilderSuccesfulResponseDTO } from "../../types/emails";
type ResponseTypes = EmailsDeleteBuilderSuccesfulResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (locationId: string, templateId: string, authToken: string) => Promise<ResponseTypes | null>;
export default del;
