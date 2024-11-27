import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesListTemplatesResponseDTO, InvoicesScheduleSearchOptions } from "../../../types/invoices";
type ResponseTypes = InvoicesListTemplatesResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: InvoicesScheduleSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
