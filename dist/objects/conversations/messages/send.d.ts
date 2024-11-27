import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationSendMessageBodyDTO, ConversationSendMessageResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConversationSendMessageResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const send: (options: ConversationSendMessageBodyDTO, authToken: string) => Promise<ResponseTypes | null>;
export default send;
