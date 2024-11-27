import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesListSchedulesResponseDTO, InvoicesScheduleSearchOptions } from "../../../types/invoices";
type ResponseTypes = InvoicesListSchedulesResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: InvoicesScheduleSearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
