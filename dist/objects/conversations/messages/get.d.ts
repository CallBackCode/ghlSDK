import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationGetMessageResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConversationGetMessageResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (messageId: ConversationGetMessageResponseDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
