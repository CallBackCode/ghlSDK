import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationGetMessageResponseDTO, ConverstationGetMessageTranscriptionResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConverstationGetMessageTranscriptionResponseDTO | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const getTranscript: (locationId: string, messageId: ConversationGetMessageResponseDTO["id"], authToken: string) => Promise<ResponseTypes | null>;
export default getTranscript;
