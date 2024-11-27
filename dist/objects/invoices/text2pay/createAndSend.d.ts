import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesTTPDTO, InvoicesTTPResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesTTPResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const createAndSend: (options: InvoicesTTPDTO, authToken: string) => Promise<ResponseTypes | null>;
export default createAndSend;
