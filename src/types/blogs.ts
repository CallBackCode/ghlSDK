export type BlogsCheckUrlSlugResponseDTO = {
  exists: boolean;
};

export type BlogsUpdatePostParams = {
  title: string; // Title of the blog
  locationId: string; // Location ID
  status: string; // Blog post status
  blogId?: string; // Blog ID
  imageUrl?: string; // Image URL
  description?: string; // Blog post description for SEO
  rawHTML?: string; // Plain HTML/TEXT for blog post
  wordCount?: number; // Word count of the blog post
  readTimeInMinutes?: number; // Read time in minutes
  imageAltText?: string; // Alt text for blog image for SEO
  categories?: string[]; // Blog post categories
  tags?: string[]; // Blog post tags
  author?: string; // Blog post author
  urlSlug?: string; // Blog post URL slug
  canonicalLink?: string; // Blog post canonical link
  publishedAt?: string; // Blog post published date
};

export type BlogsUpdatePostResponseDTO = {
  updatedBlogPost: BlogsUpdatePostParams;
};

export type BlogsCreatePostParams = {
  title: string; // Title of the blog
  locationId: string; // Location ID
  blogId: string; // Blog ID
  imageUrl: string; // Image URL
  description: string; // Blog post description for SEO
  rawHTML: string; // Plain HTML/TEXT for blog post
  status: string; // Blog post status
  wordCount: number; // Word count of the blog post
  readTimeInMinutes: number; // Read time in minutes
  imageAltText: string; // Alt text for blog image for SEO
  categories: string[]; // Blog post categories
  tags: string[]; // Blog post tags
  author: string; // Blog post author
  urlSlug: string; // Blog post URL slug
  canonicalLink: string; // Blog post canonical link
  publishedAt: string; // Blog post published date
  archived?: boolean; // Blog post archived status
  currentVersion?: string; // Blog post current version
  metaData?: object; // Blog post meta data
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
  _id: string; // Category ID
  label?: string; // Category label
  urlSlug?: string; // Category URL slug
  description?: string; // Category description
  imageUrl?: string; // Category image URL
  imageAltText?: string; // Category image alt text
  locationId?: string; // Location ID
  updatedAt?: string; // Category updated date
};

export type BlogsCategoriesResponseDTO = {
  categories: BlogsCategorySchema[];
  count: number;
  traceId: string;
};
