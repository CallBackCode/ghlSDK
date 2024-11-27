import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { ConversationGetSuccessfulResponse, CreateConversationDTO } from "../../types/conversations";
type ResponseTypes = ConversationGetSuccessfulResponse | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const create: (options: CreateConversationDTO, authToken: string) => Promise<ResponseTypes | null>;
export default create;
