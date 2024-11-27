import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesCancelScheduleDTO } from "../../../types/invoices";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (scheduleId: string, options: InvoicesCancelScheduleDTO, authToken: string) => Promise<ResponseTypes | null>;
export default del;
