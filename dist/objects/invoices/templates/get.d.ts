import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesGetTemplateResponseDTO, InvoicesVoidDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesGetTemplateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (templateId: string, options: InvoicesVoidDTO, authToken: string) => Promise<ResponseTypes | null>;
export default get;
