import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ConversationDTO, ConversationGetByIdResponse } from "../../types/conversations";
type ResponseTypes = ConversationGetByIdResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (conversationId: ConversationDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
