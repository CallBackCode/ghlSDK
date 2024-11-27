import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationGetMessageResponseDTO, ConversationSendMessageResponseDTO, ConversationUpdateMessageStatusDTO } from "../../../types/conversations";
type ResponseTypes = ConversationSendMessageResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const updateStatus: (messageId: ConversationGetMessageResponseDTO["id"], options: ConversationUpdateMessageStatusDTO, authToken: string) => Promise<ResponseTypes | null>;
export default updateStatus;
