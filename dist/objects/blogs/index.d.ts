export declare const blogs: {
    getAuthors: (options: {
        locationId: string;
        limit: number;
        offset: number;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").BlogsAuthorsResponseDTO) | null>;
    getCategories: (options: {
        locationId: string;
        limit: number;
        offset: number;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").BlogsCategoriesResponseDTO) | null>;
    checkSlug: (options: {
        locationId: string;
        urlSlug: string;
        postId?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").BlogsCheckUrlSlugResponseDTO) | null>;
    create: (options: import("../../types/blogs").BlogsCreatePostParams, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").BlogsCreatePostResponseDTO) | null>;
    update: (postId: string, options: import("../../types/blogs").BlogsUpdatePostParams, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").BlogsUpdatePostResponseDTO) | null>;
};
