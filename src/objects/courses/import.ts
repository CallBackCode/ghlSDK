import {
  BadRequestDTO,
  UnauthorizedDTO,
  UnprocessableDTO,
} from "../../types/_global";
import type { CoursePublicExporterPayload } from "../../types/courses";
import { withExponentialBackoff } from "../../contexts/requestUtils";

const baseUrl =
  "https://services.leadconnectorhq.com/courses/course-exporter/public/import";

type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;

const importCourse = async (
  options: CoursePublicExporterPayload,
  authToken: string
): Promise<ResponseTypes | null> => {
  const URL = `${baseUrl}`;

  const executeRequest = async (): Promise<ResponseTypes> => {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Version: "2021-04-15",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(options),
    });

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      (error as any).response = response;
      throw error;
    }

    return response.json();
  };

  try {
    await withExponentialBackoff(executeRequest);
    return null;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};

export default importCourse;
