import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationCancelScheduledResponseDTO, ConversationGetMessageResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConversationCancelScheduledResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const cancelScheduled: (messageId: ConversationGetMessageResponseDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default cancelScheduled;
