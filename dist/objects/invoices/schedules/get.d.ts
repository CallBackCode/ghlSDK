import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesScheduleResponseDTO, InvoicesVoidDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesScheduleResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (scheduleId: string, options: InvoicesVoidDTO, authToken: string) => Promise<ResponseTypes | null>;
export default get;
