import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesGenerateNumberResponseDTO, InvoicesVoidDTO } from "../../types/invoices";
type ResponseTypes = InvoicesGenerateNumberResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const generateInvoiceNumber: (options: InvoicesVoidDTO, authToken: string) => Promise<ResponseTypes | null>;
export default generateInvoiceNumber;
