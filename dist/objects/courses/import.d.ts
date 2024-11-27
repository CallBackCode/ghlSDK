import { BadRequestDTO, UnauthorizedDTO, UnprocessableDTO } from "../../types/_global";
import type { CoursePublicExporterPayload } from "../../types/courses";
type ResponseTypes = null | BadRequestDTO | UnauthorizedDTO | UnprocessableDTO;
declare const importCourse: (options: CoursePublicExporterPayload, authToken: string) => Promise<ResponseTypes | null>;
export default importCourse;
