import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationProcessMessageBodyDTO, ConversationProcessMessageResponseDto } from "../../../types/conversations";
type ResponseTypes = ConversationProcessMessageResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const addInbound: (options: ConversationProcessMessageBodyDTO, authToken: string) => Promise<ResponseTypes | null>;
export default addInbound;
