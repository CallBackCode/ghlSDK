import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesCreateTemplateDTO, InvoicesCreateTemplateResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesCreateTemplateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: InvoicesCreateTemplateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
