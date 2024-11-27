import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ConversationDTO, ConversationGetSuccessfulResponse, ConversationUpdateDTO } from "../../types/conversations";
type ResponseTypes = ConversationGetSuccessfulResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const update: (conversationId: ConversationDTO["id"], options: ConversationUpdateDTO, authToken: string) => Promise<ResponseTypes | null>;
export default update;
