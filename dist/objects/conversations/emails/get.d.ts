import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationGetEmailMessageResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConversationGetEmailMessageResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const get: (emailMessageId: ConversationGetEmailMessageResponseDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default get;
