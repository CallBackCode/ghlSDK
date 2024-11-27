import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesListResponseDTO, InvoicesSearchOptions } from "../../types/invoices";
type ResponseTypes = InvoicesListResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: InvoicesSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
