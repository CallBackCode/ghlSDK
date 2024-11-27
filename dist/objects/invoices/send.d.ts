import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesSendDTO, InvoicesSendResponseDTO } from "../../types/invoices";
type ResponseTypes = InvoicesSendResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const send: (invoiceId: string, options: InvoicesSendDTO, authToken: string) => Promise<ResponseTypes | null>;
export default send;
