export type CourseVisibility = "published" | "draft";

export type CourseContentType = "video" | "quiz" | "assignment";

export type CourseType =
  | "pdf"
  | "image"
  | "docx"
  | "pptx"
  | "xlsx"
  | "html"
  | "dotx"
  | "epub"
  | "webp"
  | "gdoc"
  | "mp3"
  | "doc"
  | "txt"
  | "zip"
  | "ppt"
  | "zip"
  | "ppt"
  | "key"
  | "htm"
  | "xls"
  | "odp"
  | "odt"
  | "rtf"
  | "m4a"
  | "ods"
  | "mp4"
  | "ai"
  | "avi"
  | "mov"
  | "wmv"
  | "mkv"
  | "wav"
  | "flac"
  | "ogg"
  | "png"
  | "jpeg"
  | "jpg"
  | "gif"
  | "bmp"
  | "tiff"
  | "svg"
  | "odg"
  | "sxw"
  | "sxc"
  | "sxi"
  | "rar"
  | "7z"
  | "json"
  | "xml"
  | "csv"
  | "md"
  | "obj"
  | "stl"
  | "woff"
  | "ttf";

export type CoursePostMaterialInterface = {
  title: string /** Title of the material */;
  type: CourseType /** Type of the material */;
  url: string /** URL of the material */;
};

export type CoursePostInterface = {
  title: string /** title of the course (My Course) */;
  visibility: CourseVisibility /** Visibility status of the course (published, draft) */;
  thumbnailUrl?: string /** Thumbnail of the course */;
  contentType: CourseContentType /** Type of the course content (video, quiz, assignment) */;
  description: string /** Description of the course */;
  bucketVideoUrl: string /** Bucket URL of the video */;
  postMaterials: CoursePostMaterialInterface[] /** List of post materials */;
};

export type CourseSubCategoryInterface = {
  title: string /** Title of the sub category */;
  visibility: CourseVisibility /** Visibility status of the sub category (published, draft) */;
  thumbnailUrl?: string /** Thumbnail of the sub category */;
  posts?: CoursePostInterface[] /** List of posts */;
};

export type CourseCategoryInterface = {
  title: string /** Title of the category */;
  visibility: CourseVisibility /** Visibility status of the category (published, draft) */;
  thumbnailUrl?: string /** Thumbnail of the category */;
  subCategories?: CourseSubCategoryInterface[] /** List of sub categories */;
  posts?: CoursePostInterface[] /** List of posts */;
};

export type CourseInstructorDetails = {
  name: string /** Name of the instructor */;
  description: string /** Description of the instructor */;
};

export type CourseProductInterface = {
  title: string /** Title of the product */;
  description: string /** Description of the product */;
  categories: CourseCategoryInterface[] /** List of categories */;
  imageUrl?: string /** Image URL of the product */;
  instructorDetails?: CourseInstructorDetails /** Instructor details */;
};

export type CoursePublicExporterPayload = {
  locationId: string /** Location ID */;
  userId?: string /** User ID */;
  products: CourseProductInterface[] /** List of products */;
};
