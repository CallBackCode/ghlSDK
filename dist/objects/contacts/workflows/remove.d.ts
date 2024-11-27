import { SuccededDeleteDTO, BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
type ResponseTypes = SuccededDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const remove: (contactId: string, workflowId: string, authToken: string) => Promise<ResponseTypes | null>;
export default remove;
