export declare const blogs: {
    getAuthors: (options: {
        locationId: string;
        limit: number;
        offset: number;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").Blogs.AuthorsResponseDTO) | null>;
    getCategories: (options: {
        locationId: string;
        limit: number;
        offset: number;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").Blogs.CategoriesResponseDTO) | null>;
    checkSlug: (options: {
        locationId: string;
        urlSlug: string;
        postId?: string;
    }, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").Blogs.CheckUrlSlugResponseDTO) | null>;
    create: (options: import("../../types/blogs").Blogs.CreatePostParams, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").Blogs.CreatePostResponseDTO) | null>;
    update: (postId: string, options: import("../../types/blogs").Blogs.UpdatePostParams, authToken: string) => Promise<(import("../../types/_global").BadRequestDTO | import("../../types/_global").UnauthorizedDTO | import("../../types/_global").UnprocessableDTO | import("../../types/blogs").Blogs.UpdatePostResponseDTO) | null>;
};
