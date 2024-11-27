import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationCancelScheduledResponseDTO, ConversationGetEmailMessageResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConversationCancelScheduledResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const cancelScheduled: (emailMessageId: ConversationGetEmailMessageResponseDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default cancelScheduled;
