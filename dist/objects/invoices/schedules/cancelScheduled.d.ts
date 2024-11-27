import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesCancelScheduleDTO, InvoicesCancelScheduleResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesCancelScheduleResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const cancelScheduled: (scheduleId: string, options: InvoicesCancelScheduleDTO, authToken: string) => Promise<ResponseTypes | null>;
export default cancelScheduled;
