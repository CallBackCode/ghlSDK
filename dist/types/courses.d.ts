export type CourseVisibility = "published" | "draft";
export type CourseContentType = "video" | "quiz" | "assignment";
export type CourseType = "pdf" | "image" | "docx" | "pptx" | "xlsx" | "html" | "dotx" | "epub" | "webp" | "gdoc" | "mp3" | "doc" | "txt" | "zip" | "ppt" | "zip" | "ppt" | "key" | "htm" | "xls" | "odp" | "odt" | "rtf" | "m4a" | "ods" | "mp4" | "ai" | "avi" | "mov" | "wmv" | "mkv" | "wav" | "flac" | "ogg" | "png" | "jpeg" | "jpg" | "gif" | "bmp" | "tiff" | "svg" | "odg" | "sxw" | "sxc" | "sxi" | "rar" | "7z" | "json" | "xml" | "csv" | "md" | "obj" | "stl" | "woff" | "ttf";
export type CoursePostMaterialInterface = {
    title: string;
    type: CourseType;
    url: string;
};
export type CoursePostInterface = {
    title: string;
    visibility: CourseVisibility;
    thumbnailUrl?: string;
    contentType: CourseContentType;
    description: string;
    bucketVideoUrl: string;
    postMaterials: CoursePostMaterialInterface[];
};
export type CourseSubCategoryInterface = {
    title: string;
    visibility: CourseVisibility;
    thumbnailUrl?: string;
    posts?: CoursePostInterface[];
};
export type CourseCategoryInterface = {
    title: string;
    visibility: CourseVisibility;
    thumbnailUrl?: string;
    subCategories?: CourseSubCategoryInterface[];
    posts?: CoursePostInterface[];
};
export type CourseInstructorDetails = {
    name: string;
    description: string;
};
export type CourseProductInterface = {
    title: string;
    description: string;
    categories: CourseCategoryInterface[];
    imageUrl?: string;
    instructorDetails?: CourseInstructorDetails;
};
export type CoursePublicExporterPayload = {
    locationId: string;
    userId?: string;
    products: CourseProductInterface[];
};
