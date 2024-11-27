export type BlogsCheckUrlSlugResponseDTO = {
    exists: boolean;
};
export type BlogsUpdatePostParams = {
    title: string;
    locationId: string;
    status: string;
    blogId?: string;
    imageUrl?: string;
    description?: string;
    rawHTML?: string;
    wordCount?: number;
    readTimeInMinutes?: number;
    imageAltText?: string;
    categories?: string[];
    tags?: string[];
    author?: string;
    urlSlug?: string;
    canonicalLink?: string;
    publishedAt?: string;
};
export type BlogsUpdatePostResponseDTO = {
    updatedBlogPost: BlogsUpdatePostParams;
};
export type BlogsCreatePostParams = {
    title: string;
    locationId: string;
    blogId: string;
    imageUrl: string;
    description: string;
    rawHTML: string;
    status: string;
    wordCount: number;
    readTimeInMinutes: number;
    imageAltText: string;
    categories: string[];
    tags: string[];
    author: string;
    urlSlug: string;
    canonicalLink: string;
    publishedAt: string;
    archived?: boolean;
    currentVersion?: string;
    metaData?: object;
};
type BlogsAuthorSocialsSchema = {
    type: string;
    url: string;
};
export type BlogsCreatePostResponseDTO = {
    data: BlogsCreatePostParams;
};
type BlogsAuthorsSchema = {
    socials?: BlogsAuthorSocialsSchema[];
    _id?: string;
    name?: string;
    imageUrl?: string;
    imageAltText?: string;
    description?: string;
    locationId?: string;
    updatedAt?: string;
};
export type BlogsAuthorsResponseDTO = {
    authors: BlogsAuthorsSchema[];
    count: number;
    traceId: string;
};
type BlogsCategorySchema = {
    _id: string;
    label?: string;
    urlSlug?: string;
    description?: string;
    imageUrl?: string;
    imageAltText?: string;
    locationId?: string;
    updatedAt?: string;
};
export type BlogsCategoriesResponseDTO = {
    categories: BlogsCategorySchema[];
    count: number;
    traceId: string;
};
export {};
