import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { InvoicesCreateDTO, InvoicesCreateResponseDTO } from "../../types/invoices";
type ResponseTypes = InvoicesCreateResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: InvoicesCreateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
