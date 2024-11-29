import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesDeleteResponseDTO } from "../../types/invoices";
type SearchOptions = {
    altId: string;
    altType: "location";
};
type ResponseTypes = InvoicesDeleteResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (invoiceId: string, options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default del;
