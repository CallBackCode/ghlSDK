import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { InvoicesCreateScheduleDTO, InvoicesCreateScheduleResponseDTO } from "../../../types/invoices";
type ResponseTypes = InvoicesCreateScheduleResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: InvoicesCreateScheduleDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
