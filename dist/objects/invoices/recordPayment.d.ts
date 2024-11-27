import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesRecordPaymentResponseDTO, InvoicesRecordPaymentDTO } from "../../types/invoices";
type ResponseTypes = InvoicesRecordPaymentResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const recordPayment: (invoiceId: string, options: InvoicesRecordPaymentDTO, authToken: string) => Promise<ResponseTypes | null>;
export default recordPayment;
