import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationGetMessagesByResponseDTO } from "../../../types/conversations";
type SearchOptions = {
    lastMessageId?: string;
    limit?: number;
    type?: string;
};
type ResponseTypes = ConversationGetMessagesByResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (conversationId: string, options: SearchOptions, authToken: string) => Promise<ResponseTypes | null>;
export default search;
