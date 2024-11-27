import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesUpdateDTO, InvoicesUpdateResponseDTO } from "../../types/invoices";
type ResponseTypes = InvoicesUpdateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (invoiceId: string, options: InvoicesUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
