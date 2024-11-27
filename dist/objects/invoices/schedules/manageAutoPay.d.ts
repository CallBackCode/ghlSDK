import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesScheduleDTO, InvoicesScheduleResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesScheduleResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const manageAutoPay: (scheduleId: string, options: InvoicesScheduleDTO, authToken: string) => Promise<ResponseTypes | null>;
export default manageAutoPay;
