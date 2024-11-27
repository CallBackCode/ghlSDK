import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesVoidDTO, InvoicesVoidResponseDTO } from "../../types/invoices";
type ResponseTypes = InvoicesVoidResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const voidInvoice: (invoiceId: string, options: InvoicesVoidDTO, authToken: string) => Promise<ResponseTypes | null>;
export default voidInvoice;
