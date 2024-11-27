import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesVoidDTO } from "../../../types/invoices";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (templateId: string, options: InvoicesVoidDTO, authToken: string) => Promise<ResponseTypes | null>;
export default del;
