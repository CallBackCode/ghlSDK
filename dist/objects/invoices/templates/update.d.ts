import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesUpdateTemplateDTO, InvoicesUpdateTemplateResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesUpdateTemplateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (templateId: string, options: InvoicesUpdateTemplateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
