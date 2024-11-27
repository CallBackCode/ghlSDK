import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ConversationSearchParams, ConversationSendResponseDTO } from "../../types/conversations";
type ResponseTypes = ConversationSendResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const search: (options: ConversationSearchParams, authToken: string) => Promise<ResponseTypes | null>;
export default search;
