import { BadRequestDTO, SuccessDeleteDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ConversationDTO } from "../../types/conversations";
type ResponseTypes = SuccessDeleteDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const del: (conversationId: ConversationDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default del;
