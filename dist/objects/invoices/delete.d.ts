import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesDeleteResponseDTO } from "../../types/invoices";
type ResponseTypes = InvoicesDeleteResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (invoiceId: string, authToken: string) => Promise<ResponseTypes | null>;
export default del;
