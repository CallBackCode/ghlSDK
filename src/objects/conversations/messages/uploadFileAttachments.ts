import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../../types/_global";
import type {
  ConversationUploadFilesDTO,
  ConversationUploadFilesErrorResponseDto,
  ConversationUploadFilesResponseDTO,
} from "../../../types/conversations";
import { withExponentialBackoff } from "../../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/conversations/messages/outbound";

type ResponseTypes =
  | ConversationUploadFilesResponseDTO
  | ConversationUploadFilesErrorResponseDto
  | BadRequestDTO
  | UnauthorizedDTO
  | UnprocessableDTO;

const uploadFileAttachments = async (
  options: ConversationUploadFilesDTO,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    // Create a FormData object
    const formData = new FormData();

    // Add the fields to the FormData object
    for (const key in options) {
      const value = options[key as keyof ConversationUploadFilesDTO];

      if (Array.isArray(value)) {
        // Handle arrays (e.g., file attachments)
        value.forEach(item => formData.append(key, item));
      } else {
        formData.append(key, value as any);
      }
    }

    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
      body: formData, // Pass the FormData object as the body
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).response = response;
      throw error;
    }

    return response.json();
  };

  try {
    const data = await withExponentialBackoff(executeRequest);
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default uploadFileAttachments;
