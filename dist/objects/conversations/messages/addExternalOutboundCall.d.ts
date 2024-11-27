import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationProcessOutboundMessageBodyDTO, ConversationProcessMessageResponseDto } from "../../../types/conversations";
type ResponseTypes = ConversationProcessMessageResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const addExternalOutboundCall: (options: ConversationProcessOutboundMessageBodyDTO, authToken: string) => Promise<ResponseTypes | null>;
export default addExternalOutboundCall;
