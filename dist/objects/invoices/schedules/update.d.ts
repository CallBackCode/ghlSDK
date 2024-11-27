import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesUpdateScheduleDTO, InvoicesUpdateScheduleResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesUpdateScheduleResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (scheduleId: string, options: InvoicesUpdateScheduleDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
