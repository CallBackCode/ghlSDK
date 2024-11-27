import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesGetResponseDTO, InvoicesVoidDTO } from "../../types/invoices";
type ResponseTypes = InvoicesGetResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (invoiceId: string, options: InvoicesVoidDTO, authToken: string) => Promise<ResponseTypes | null>;
export default get;
