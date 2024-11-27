import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../../types/_global";
import type { ConversationUploadFilesDTO, ConversationUploadFilesErrorResponseDto, ConversationUploadFilesResponseDTO } from "../../../types/conversations";
type ResponseTypes = ConversationUploadFilesResponseDTO | ConversationUploadFilesErrorResponseDto | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const uploadFileAttachments: (options: ConversationUploadFilesDTO, authToken: string) => Promise<ResponseTypes | null>;
export default uploadFileAttachments;
