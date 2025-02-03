export namespace Blogs {
  /**
   * Represents the response of checking if a URL slug exists.
   *
   * @property {boolean} exists - Returns true if the URL slug exists, otherwise false.
   * @memberof Blogs
   * @example
   * ```ts
   * const response: CheckUrlSlugResponseDTO = {
   *   exists: true
   * };
   * ```
   */
  export type CheckUrlSlugResponseDTO = {
    /**
     * Returns true if the URL slug exists, otherwise false.
     *
     * @type {boolean}
     * @memberof CheckUrlSlugResponseDTO
     * @example
     * ```ts
     * exists = true
     * ```
     */
    exists: boolean;
  };

  /**
   * Represents the response of deleting a blog post.
   *
   * @example "PUBLISHED"
   */
  export type Status = "ARCHIVED" | "DRAFT" | "PUBLISHED";

  /**
   * Parameters for updating a blog post.
   * @requires [title, locationId, status, blogId, imageUrl]
   * @memberof Blogs
   * @example
   * ```ts
   * const params: UpdatePostParams = {
   *  title: 'Blog Post Title',
   *  locationId: '502goXVW3lIExEQPOnd3',
   *  status: 'PUBLISHED',
   *  blogId: '502goXVW3lIExEQPOnd3',
   *  imageUrl: 'https://example.com/image.jpg',
   *  description: 'Blog post description',
   *  rawHTML: '<p>Blog post content</p>',
   *  wordCount: 100,
   *  readTimeInMinutes: 5,
   *  imageAltText: 'Blog image alt text',
   *  categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
   *  tags: ['tag1', 'tag2'],
   *  author: '658c8e4c47ce4ec65a6c0a50',
   *  urlSlug: 'blog-post-title',
   *  canonicalLink: 'https://example.com/blog-post',
   *  publishedAt: '2022-01-01T00:00:00.000Z'
   * };
   * ```
   *
   * @property {string} title - The public title of the blog post.
   * @example 'Blog Post Title'
   *
   * @property {string} locationId - The location ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {Status} status - The status of the blog post.
   * @example 'PUBLISHED'
   *
   * @property {string} blogId - The blog ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} imageUrl - The image URL of the blog post.
   * @example 'https://example.com/image.jpg'
   *
   * @property {string} [description] - The description of the blog post.
   * @example 'Blog post description'
   *
   * @property {string} [rawHTML] - The plain HTML/TEXT for blog post.
   * @example '<p>Blog post content</p>'
   *
   * @property {number} [wordCount] - The word count of the blog post.
   * @example 100
   *
   * @property {number} [readTimeInMinutes] - The read time in minutes of the blog post.
   * @example 5
   *
   * @property {string} [imageAltText] - The alt text for blog image for SEO.
   * @example 'Blog image alt text'
   *
   * @property {string[]} [categories] - The IDs of the blog post categories.
   * @example ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
   *
   * @property {string[]} [tags] - The blog post tags.
   * @example ['tag1', 'tag2']
   *
   * @property {string} [author] - The ID of the author of the blog post.
   * @example '658c8e4c47ce4ec65a6c0a50'
   *
   * @property {string} [urlSlug] - The blog post URL slug.
   * @example 'blog-post-title'
   *
   * @property {string} [canonicalLink] - The blog post canonical link for SEO optimization.
   * @example 'https://example.com/blog-post'
   *
   * @property {string} [publishedAt] - The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
   * @example '2022-01-01T00:00:00.000Z'
   */
  export type UpdatePostParams = {
    /**
     * The public title of the blog post.
     *
     * @required
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * title = 'Blog Post Title'
     * ```
     */
    title: string;

    /**
     * The location ID of the blog post.
     *
     * @required
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * locationId = '502goXVW3lIExEQPOnd3'
     * ```
     */
    locationId: string;

    /**
     * The status of the blog post.
     *
     * @required
     * @type {Status}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * status = 'PUBLISHED'
     * ```
     */
    status: Status;

    /**
     * The blog ID of the blog post.
     *
     * @required
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * blogId = '502goXVW3lIExEQPOnd3'
     * ```
     */
    blogId: string;

    /**
     * The image URL of the blog post.
     *
     * @required
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * imageUrl = 'https://example.com/image.jpg'
     * ```
     */
    imageUrl: string;

    /**
     * The description of the blog post.
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * description = 'Blog post description'
     * ```
     */
    description?: string;

    /**
     * The plain HTML/TEXT for blog post.
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * rawHTML = '<p>Blog post content</p>'
     * ```
     */
    rawHTML?: string;

    /**
     * The word count of the blog post.
     *
     * @type {number}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * wordCount = 100
     * ```
     */
    wordCount?: number;

    /**
     * The read time in minutes of the blog post.
     *
     * @type {number}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * readTimeInMinutes = 5
     * ```
     */
    readTimeInMinutes?: number;

    /**
     * The alt text for blog image for SEO.
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * imageAltText = 'Blog image alt text'
     * ```
     */
    imageAltText?: string;

    /**
     * The IDs of the blog post categories.
     *
     * @type {string[]}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * categories = ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
     * ```
     */
    categories?: string[];

    /**
     * The blog post tags.
     *
     * @type {string[]}
     * @memberof UpdatePostParams
     * @example
     * ```ts
     * tags = ['tag1', 'tag2']
     * ```
     */
    tags?: string[];

    /**
     * The ID of the author of the blog post.
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```
     * author = '658c8e4c47ce4ec65a6c0a50'
     * ```
     */
    author?: string;

    /**
     * The blog post URL slug.
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```
     * urlSlug = 'blog-post-title'
     * ```
     */
    urlSlug?: string;

    /**
     * The blog post canonical link for SEO optimization.
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```
     * canonicalLink = 'https://example.com/blog-post'
     * ```
     */
    canonicalLink?: string;

    /**
     * The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
     *
     * @type {string}
     * @memberof UpdatePostParams
     * @example
     * ```
     * publishedAt = '2022-01-01T00:00:00.000Z'
     * ```
     */
    publishedAt?: string;
  };

  /**
   * Represents the response of updating a blog post.
   *
   * @requires [UpdatePostParams]
   * @memberof Blogs
   * @example
   * ```ts
   * const response: UpdatePostResponseDTO = {
   *  updatedBlogPost: {
   *    title: 'Blog Post Title',
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    status: 'PUBLISHED',
   *    blogId: '502goXVW3lIExEQPOnd3',
   *    imageUrl: 'https://example.com/image.jpg',
   *    description: 'Blog post description',
   *    rawHTML: '<p>Blog post content</p>',
   *    wordCount: 100,
   *    readTimeInMinutes: 5,
   *    imageAltText: 'Blog image alt text',
   *    categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
   *    tags: ['tag1', 'tag2'],
   *    author: '658c8e4c47ce4ec65a6c0a50',
   *    urlSlug: 'blog-post-title',
   *    canonicalLink: 'https://example.com/blog-post',
   *    publishedAt: '2022-01-01T00:00:00.000Z'
   *  }
   * };
   * ```
   *
   * @property {UpdatePostParams} updatedBlogPost - Updated blog post.
   * @example
   * ```ts
   * const updatedBlogPost: UpdatePostParams = {
   *    title: 'Blog Post Title',
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    status: 'PUBLISHED',
   *    blogId: '502goXVW3lIExEQPOnd3',
   *    imageUrl: 'https://example.com/image.jpg',
   *    description: 'Blog post description',
   *    rawHTML: '<p>Blog post content</p>',
   *    wordCount: 100,
   *    readTimeInMinutes: 5,
   *    imageAltText: 'Blog image alt text',
   *    categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
   *    tags: ['tag1', 'tag2'],
   *    author: '658c8e4c47ce4ec65a6c0a50',
   *    urlSlug: 'blog-post-title',
   *    canonicalLink: 'https://example.com/blog-post',
   *    publishedAt: '2022-01-01T00:00:00.000Z'
   *  }
   * ```
   *
   * @property {string} title - The public title of the blog post.
   * @example 'Blog Post Title'
   *
   * @property {string} locationId - The location ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {Status} status - The status of the blog post.
   * @example 'PUBLISHED'
   *
   * @property {string} blogId - The blog ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} imageUrl - The image URL of the blog post.
   * @example 'https://example.com/image.jpg'
   *
   * @property {string} [description] - The description of the blog post.
   * @example 'Blog post description'
   *
   * @property {string} [rawHTML] - The plain HTML/TEXT for blog post.
   * @example '<p>Blog post content</p>'
   *
   * @property {number} [wordCount] - The word count of the blog post.
   * @example 100
   *
   * @property {number} [readTimeInMinutes] - The read time in minutes of the blog post.
   * @example 5
   *
   * @property {string} [imageAltText] - The alt text for blog image for SEO.
   * @example 'Blog image alt text'
   *
   * @property {string[]} [categories] - The IDs of the blog post categories.
   * @example ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
   *
   * @property {string[]} [tags] - The blog post tags.
   * @example ['tag1', 'tag2']
   *
   * @property {string} [author] - The ID of the author of the blog post.
   * @example '658c8e4c47ce4ec65a6c0a50'
   *
   * @property {string} [urlSlug] - The blog post URL slug.
   * @example 'blog-post-title'
   *
   * @property {string} [canonicalLink] - The blog post canonical link for SEO optimization.
   * @example 'https://example.com/blog-post'
   *
   * @property {string} [publishedAt] - The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
   * @example '2022-01-01T00:00:00.000Z'
   */
  export type UpdatePostResponseDTO = {
    /**
     * Updated blog post.
     *
     * @required
     * @type {UpdatePostParams}
     * @memberof UpdatePostResponseDTO
     * @example
     * ```ts
     * const updatedBlogPost: UpdatePostParams = {
     *    title: 'Blog Post Title',
     *    locationId: '502goXVW3lIExEQPOnd3',
     *    status: 'PUBLISHED',
     *    blogId: '502goXVW3lIExEQPOnd3',
     *    imageUrl: 'https://example.com/image.jpg',
     *    description: 'Blog post description',
     *    rawHTML: '<p>Blog post content</p>',
     *    wordCount: 100,
     *    readTimeInMinutes: 5,
     *    imageAltText: 'Blog image alt text',
     *    categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
     *    tags: ['tag1', 'tag2'],
     *    author: '658c8e4c47ce4ec65a6c0a50',
     *    urlSlug: 'blog-post-title',
     *    canonicalLink: 'https://example.com/blog-post',
     *    publishedAt: '2022-01-01T00:00:00.000Z'
     *  }
     * ```
     *
     * @property {string} title - The public title of the blog post.
     * @example 'Blog Post Title'
     *
     * @property {string} locationId - The location ID of the blog post.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {Status} status - The status of the blog post.
     * @example 'PUBLISHED'
     *
     * @property {string} blogId - The blog ID of the blog post.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {string} imageUrl - The image URL of the blog post.
     * @example 'https://example.com/image.jpg'
     *
     * @property {string} [description] - The description of the blog post.
     * @example 'Blog post description'
     *
     * @property {string} [rawHTML] - The plain HTML/TEXT for blog post.
     * @example '<p>Blog post content</p>'
     *
     * @property {number} [wordCount] - The word count of the blog post.
     * @example 100
     *
     * @property {number} [readTimeInMinutes] - The read time in minutes of the blog post.
     * @example 5
     *
     * @property {string} [imageAltText] - The alt text for blog image for SEO.
     * @example 'Blog image alt text'
     *
     * @property {string[]} [categories] - The IDs of the blog post categories.
     * @example ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
     *
     * @property {string[]} [tags] - The blog post tags.
     * @example ['tag1', 'tag2']
     *
     * @property {string} [author] - The ID of the author of the blog post.
     * @example '658c8e4c47ce4ec65a6c0a50'
     *
     * @property {string} [urlSlug] - The blog post URL slug.
     * @example 'blog-post-title'
     *
     * @property {string} [canonicalLink] - The blog post canonical link for SEO optimization.
     * @example 'https://example.com/blog-post'
     *
     * @property {string} [publishedAt] - The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
     * @example '2022-01-01T00:00:00.000Z'
     * */
    updatedBlogPost: UpdatePostParams;
  };

  /**
   * Parameters for creating a blog post.
   *
   * @requires [title, locationId, status, blogId, imageUrl, description, rawHTML, wordCount, readTimeInMinutes, imageAltText, categories, tags, author, urlSlug, canonicalLink, publishedAt]
   * @memberof Blogs
   * @example
   * ```ts
   * const params: CreatePostParams = {
   *  title: 'Blog Post Title',
   *  locationId: '502goXVW3lIExEQPOnd3',
   *  status: 'PUBLISHED',
   *  blogId: '502goXVW3lIExEQPOnd3',
   *  imageUrl: 'https://example.com/image.jpg',
   *  description: 'Blog post description',
   *  rawHTML: '<p>Blog post content</p>',
   *  wordCount: 100,
   *  readTimeInMinutes: 5,
   *  imageAltText: 'Blog image alt text',
   *  categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
   *  tags: ['tag1', 'tag2'],
   *  author: '658c8e4c47ce4ec65a6c0a50',
   *  urlSlug: 'blog-post-title',
   *  canonicalLink: 'https://example.com/blog-post',
   *  publishedAt: '2022-01-01T00:00:00.000Z'
   * };
   * ```
   *
   * @property {string} title - The public title of the blog post.
   * @example 'Blog Post Title'
   *
   * @property {string} locationId - The location ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {Status} status - The status of the blog post.
   * @example 'PUBLISHED'
   *
   * @property {string} blogId - The blog ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} imageUrl - The image URL of the blog post.
   * @example 'https://example.com/image.jpg'
   *
   * @property {string} [description] - The description of the blog post.
   * @example 'Blog post description'
   *
   * @property {string} [rawHTML] - The plain HTML/TEXT for blog post.
   * @example '<p>Blog post content</p>'
   *
   * @property {number} [wordCount] - The word count of the blog post.
   * @example 100
   *
   * @property {number} [readTimeInMinutes] - The read time in minutes of the blog post.
   * @example 5
   *
   * @property {string} [imageAltText] - The alt text for blog image for SEO.
   * @example 'Blog image alt text'
   *
   * @property {string[]} [categories] - The IDs of the blog post categories.
   * @example ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
   *
   * @property {string[]} [tags] - The blog post tags.
   * @example ['tag1', 'tag2']
   *
   * @property {string} [author] - The ID of the author of the blog post.
   * @example '658c8e4c47ce4ec65a6c0a50'
   *
   * @property {string} [urlSlug] - The blog post URL slug.
   * @example 'blog-post-title'
   *
   * @property {string} [canonicalLink] - The blog post canonical link for SEO optimization.
   * @example 'https://example.com/blog-post'
   *
   * @property {string} [publishedAt] - The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
   * @example '2022-01-01T00:00:00.000Z'
   */
  export type CreatePostParams = {
    /**
     * The public title of the blog post.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'Blog Post Title'
     * ```
     */
    title: string;

    /**
     * The location ID of the blog post.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * '502goXVW3lIExEQPOnd3'
     * ```
     */
    locationId: string;

    /**
     * The ID of the blog the post belongs to.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * '502goXVW3lIExEQPOnd3'
     * ```
     */
    blogId: string;

    /**
     * The image URL of the blog post.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'https://example.com/image.jpg'
     * ```
     */
    imageUrl: string;

    /**
     * The description of the blog post.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'Blog post description'
     * ```
     */
    description: string;

    /**
     * The plain HTML/TEXT for blog post.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * '<p>Blog post content</p>'
     * ```
     */
    rawHTML: string;

    /**
     * The status of the blog post.
     *
     * @required
     * @type {Status}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'PUBLISHED'
     * ```
     */
    status: string;

    /**
     * The word count of the blog post.
     *
     * @required
     * @type {number}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 100
     * ```
     */
    wordCount: number;

    /**
     * The read time in minutes of the blog post.
     *
     * @required
     * @type {number}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 5
     * ```
     */
    readTimeInMinutes: number;

    /**
     * The alt text for blog image for SEO.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'Blog image alt text'
     * ```
     */
    imageAltText: string;

    /**
     * The IDs of the blog post categories.
     *
     * @required
     * @type {string[]}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
     * ```
     */
    categories: string[];

    /**
     * The blog post tags.
     *
     * @required
     * @type {string[]}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * ['tag1', 'tag2']
     * ```
     */
    tags: string[];

    /**
     * The ID of the author of the blog post.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * '658c8e4c47ce4ec65a6c0a50'
     * ```
     */
    author: string;

    /**
     * The blog post URL slug.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'blog-post-title'
     * ```
     */
    urlSlug: string;

    /**
     * The blog post canonical link for SEO optimization.
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * 'https://example.com/blog-post'
     * ```
     */
    canonicalLink: string;

    /**
     * The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
     *
     * @required
     * @type {string}
     * @memberof CreatePostParams
     * @example
     * ```ts
     * '2022-01-01T00:00:00.000Z'
     * ```
     */
    publishedAt: string;
  };

  /**
   * Represents which social media the link directs to.
   *
   * @type {AuthorSocialType}
   * @example
   * ```ts
   * "twitter"
   * ```
   */
  type AuthorSocialType =
    | "twitter"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "youtube";

  /**
   * Represents the schema of author social media.
   * @example
   * ```ts
   * const socials: AuthorSocialsSchema = {
   *  type: 'twitter',
   *  url: 'https://twitter.com/username'
   * };
   * ```
   * @property {AuthorSocialType} type - Social media type.
   * @example 'twitter'
   *
   * @property {string} url - Social media URL.
   * @example 'https://twitter.com/username'
   */
  type AuthorSocialsSchema = {
    /**
     * Social media type.
     *
     * @type {AuthorSocialType}
     * @memberof AuthorSocialsSchema
     * @example
     * ```ts
     * 'twitter'
     * ```
     */
    type: AuthorSocialType;

    /**
     * Social media URL.
     *
     * @type {string}
     * @memberof AuthorSocialsSchema
     * @example
     * ```ts
     * 'https://twitter.com/username'
     * ```
     */
    url: string;
  };

  /**
   * Represents the response of creating a blog post.
   *
   * @requires [CreatePostParams]
   * @property {CreatePostParams} [data] - Created blog post.
   * @memberof Blogs
   * @example
   * ```ts
   * const response: CreatePostResponseDTO = {
   *  data: {
   *    title: 'Blog Post Title',
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    status: 'PUBLISHED',
   *    blogId: '502goXVW3lIExEQPOnd3',
   *    imageUrl: 'https://example.com/image.jpg',
   *    description: 'Blog post description',
   *    rawHTML: '<p>Blog post content</p>',
   *    wordCount: 100,
   *    readTimeInMinutes: 5,
   *    imageAltText: 'Blog image alt text',
   *    categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
   *    tags: ['tag1', 'tag2'],
   *    author: '658c8e4c47ce4ec65a6c0a50',
   *    urlSlug: 'blog-post-title',
   *    canonicalLink: 'https://example.com/blog-post',
   *    publishedAt: '2022-01-01T00:00:00.000Z'
   *  }
   * };
   * ```
   *
   * @property {string} title - The public title of the blog post.
   * @example 'Blog Post Title'
   *
   * @property {string} locationId - The location ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {Status} status - The status of the blog post.
   * @example 'PUBLISHED'
   *
   * @property {string} blogId - The blog ID of the blog post.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} imageUrl - The image URL of the blog post.
   * @example 'https://example.com/image.jpg'
   *
   * @property {string} [description] - The description of the blog post.
   * @example 'Blog post description'
   *
   * @property {string} [rawHTML] - The plain HTML/TEXT for blog post.
   * @example '<p>Blog post content</p>'
   *
   * @property {number} [wordCount] - The word count of the blog post.
   * @example 100
   *
   * @property {number} [readTimeInMinutes] - The read time in minutes of the blog post.
   * @example 5
   *
   * @property {string} [imageAltText] - The alt text for blog image for SEO.
   * @example 'Blog image alt text'
   *
   * @property {string[]} [categories] - The IDs of the blog post categories.
   * @example ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
   *
   * @property {string[]} [tags] - The blog post tags.
   * @example ['tag1', 'tag2']
   *
   * @property {string} [author] - The ID of the author of the blog post.
   * @example '658c8e4c47ce4ec65a6c0a50'
   *
   * @property {string} [urlSlug] - The blog post URL slug.
   * @example 'blog-post-title'
   *
   * @property {string} [canonicalLink] - The blog post canonical link for SEO optimization.
   * @example 'https://example.com/blog-post'
   *
   * @property {string} [publishedAt] - The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
   * @example '2022-01-01T00:00:00.000Z'
   */
  export type CreatePostResponseDTO = {
    /**
     * Created blog post.
     *
     * @required
     * @type {CreatePostParams}
     * @memberof CreatePostResponseDTO
     * @example
     * ```ts
     * const data: CreatePostParams = {
     *  title: 'Blog Post Title',
     *  locationId: '502goXVW3lIExEQPOnd3',
     *  status: 'PUBLISHED',
     *  blogId: '502goXVW3lIExEQPOnd3',
     *  imageUrl: 'https://example.com/image.jpg',
     *  description: 'Blog post description',
     *  rawHTML: '<p>Blog post content</p>',
     *  wordCount: 100,
     *  readTimeInMinutes: 5,
     *  imageAltText: 'Blog image alt text',
     *  categories: ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2'],
     *  tags: ['tag1', 'tag2'],
     *  author: '658c8e4c47ce4ec65a6c0a50',
     *  urlSlug: 'blog-post-title',
     *  canonicalLink: 'https://example.com/blog-post',
     *  publishedAt: '2022-01-01T00:00:00.000Z'
     * };
     * ```
     *
     * @property {string} title - The public title of the blog post.
     * @example 'Blog Post Title'
     *
     * @property {string} locationId - The location ID of the blog post.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {Status} status - The status of the blog post.
     * @example 'PUBLISHED'
     *
     * @property {string} blogId - The blog ID of the blog post.
     * @example '502goXVW3lIExEQPOnd3'
     *
     * @property {string} imageUrl - The image URL of the blog post.
     * @example 'https://example.com/image.jpg'
     *
     * @property {string} [description] - The description of the blog post.
     * @example 'Blog post description'
     *
     * @property {string} [rawHTML] - The plain HTML/TEXT for blog post.
     * @example '<p>Blog post content</p>'
     *
     * @property {number} [wordCount] - The word count of the blog post.
     * @example 100
     *
     * @property {number} [readTimeInMinutes] - The read time in minutes of the blog post.
     * @example 5
     *
     * @property {string} [imageAltText] - The alt text for blog image for SEO.
     * @example 'Blog image alt text'
     *
     * @property {string[]} [categories] - The IDs of the blog post categories.
     * @example ['502goXVW3lIExEQPOnd3', '932iwNS35oEIyRPE3ty2']
     *
     * @property {string[]} [tags] - The blog post tags.
     * @example ['tag1', 'tag2']
     *
     * @property {string} [author] - The ID of the author of the blog post.
     * @example '658c8e4c47ce4ec65a6c0a50'
     *
     * @property {string} [urlSlug] - The blog post URL slug.
     * @example 'blog-post-title'
     *
     * @property {string} [canonicalLink] - The blog post canonical link for SEO optimization.
     * @example 'https://example.com/blog-post'
     *
     * @property {string} [publishedAt] - The blog post published date (YYYY-MM-DDTHH:mm:ss.msZ).
     * @example '2022-01-01T00:00:00.000Z'
     */
    data: CreatePostParams /** Created blog post */;
  };

  /**
   * Represents the schema of author.
   *
   * @example
   * ```ts
   * const author: AuthorsSchema = {
   *  socials: [
   *    {
   *      type: 'twitter',
   *      url: 'https://twitter.com/username'
   *    }, {
   *      type: 'facebook',
   *      url: 'https://facebook.com/username'
   *    }
   *  ],
   *  _id: '658c8e4c47ce4ec65a6c0a50',
   *  name: 'Author Name',
   *  imageUrl: 'https://example.com/image.jpg',
   *  imageAltText: 'Author image alt text',
   *  description: 'Author description',
   *  locationId: '502goXVW3lIExEQPOnd3',
   *  updatedAt: '2022-01-01T00:00:00.000Z'
   * };
   * ```
   *
   * @property {AuthorSocialsSchema[]} [socials] - Author social media links.
   * @example
   * ```ts
   * [{
   *  type: 'twitter',
   *  url: 'https://twitter.com/username'
   * }, {
   *  type: 'facebook',
   *  url: 'https://facebook.com/username'
   * }]
   * ```
   *
   * @property {string} [_id] - The unique identifier of the author.
   * @example '658c8e4c47ce4ec65a6c0a50'
   *
   * @property {string} [name] - The name of the author.
   * @example 'Author Name'
   *
   * @property {string} [imageUrl] - The url of the image of the author.
   * @example 'https://example.com/image.jpg'
   *
   * @property {string} [imageAltText] - The alt text of the image of the author for SEO Optimization and accessability.
   * @example * 'Author image alt text'
   *
   * @property {string} [description] - The description of the author.
   * @example 'Author description'
   *
   * @property {string} [locationId] - The location ID the author is created on.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} [updatedAt] - The date the author was last updated.
   * @example '2022-01-01T00:00:00.000Z'
   */
  type AuthorsSchema = {
    /**
     * Author social media links.
     *
     * @type {AuthorSocialsSchema[]}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * [{
     *  type: 'twitter',
     *  url: 'https://twitter.com/username'
     * }, {
     *  type: 'facebook',
     *  url: 'https://facebook.com/username'
     * }]
     */
    socials?: AuthorSocialsSchema[];

    /**
     * The unique identifier of the author.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * '658c8e4c47ce4ec65a6c0a50'
     */
    _id?: string;

    /**
     * The name of the author.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * 'Author Name'
     */
    name?: string;

    /**
     * The url of the image of the author.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * 'https://example.com/image.jpg'
     * ```
     */
    imageUrl?: string;

    /**
     * The alt text of the image of the author for SEO Optimization and accessability.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * 'Author image alt text'
     * ```
     */
    imageAltText?: string;

    /**
     * The description of the author.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * 'Author description'
     * ```
     */
    description?: string;

    /**
     * The location ID the author is created on.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * '502goXVW3lIExEQPOnd3'
     * ```
     */
    locationId?: string;

    /**
     * The date the author was last updated.
     *
     * @type {string}
     * @memberof AuthorsSchema
     * @example
     * ```ts
     * '2022-01-01T00:00:00.000Z'
     * ```
     */
    updatedAt?: string;
  };

  /**
   * Represents the response of fetching authors.
   *
   * @requires [authors, count, traceId]
   * @memberof Blogs
   * @example
   * ```ts
   * const response: AuthorsResponseDTO = {
   *  authors: [
   *      {
   *      socials: [{
   *          type: 'twitter',
   *          url: 'https://twitter.com/username'
   *        }, {
   *          type: 'facebook',
   *          url: 'https://facebook.com/username'
   *        }],
   *    _id: '658c8e4c47ce4ec65a6c0a50',
   *    name: 'Author Name',
   *    imageUrl: 'https://example.com/image.jpg',
   *    imageAltText: 'Author image alt text',
   *    description: 'Author description',
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    updatedAt: '2022-01-01T00:00:00.000Z'
   *    }
   *  ],
   *  count: 1,
   *  traceId: '783d3b1e47ce4ec65w4n5e72'
   * };
   * ```
   *
   * @property {AuthorsSchema[]} [authors] - An array of authors within the account.
   * @example
   * ```ts
   * const author: AuthorsSchema[] = [
   *      {
   *      socials: [{
   *          type: 'twitter',
   *          url: 'https://twitter.com/username'
   *        }, {
   *          type: 'facebook',
   *          url: 'https://facebook.com/username'
   *        }],
   *    _id: '658c8e4c47ce4ec65a6c0a50',
   *    name: 'Author Name',
   *    imageUrl: 'https://example.com/image.jpg',
   *    imageAltText: 'Author image alt text',
   *    description: 'Author description',
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    updatedAt: '2022-01-01T00:00:00.000Z'
   *    }
   *  ];
   * ```
   *
   * @property {number} [count] - The number of authors returned by the request.
   * @example 1
   *
   * @property {string} [traceId] - The unique identifier for the request.
   * @example '783d3b1e47ce4ec65w4n5e72'
   */
  export type AuthorsResponseDTO = {
    /**
     * An array of authors within the account.
     *
     * @required
     * @type {AuthorsSchema[]}
     * @memberof AuthorsResponseDTO
     * @example
     * ```ts
     * const author: AuthorsSchema = {
     *  socials: [
     *    {
     *      type: 'twitter',
     *      url: 'https://twitter.com/username'
     *    }, {
     *      type: 'facebook',
     *      url: 'https://facebook.com/username'
     *    }
     *  ],
     *  _id: '658c8e4c47ce4ec65a6c0a50',
     *  name: 'Author Name',
     *  imageUrl: 'https://example.com/image.jpg',
     *  imageAltText: 'Author image alt text',
     *  description: 'Author description',
     *  locationId: '502goXVW3lIExEQPOnd3',
     *  updatedAt: '2022-01-01T00:00:00.000Z'
     * };
     * ```
     */
    authors: AuthorsSchema[];

    /**
     * The number of authors returned by the request.
     *
     * @required
     * @type {number}
     * @memberof AuthorsResponseDTO
     * @example
     * ```ts
     * 5
     * ```
     */
    count: number;

    /**
     * The unique identifier for the request.
     *
     * @required
     * @type {string}
     * @memberof AuthorsResponseDTO
     * @example
     * ```ts
     * '783d3b1e47ce4ec65w4n5e72'
     * ```
     */
    traceId: string;
  };

  /**
   * Represents the schema of category.
   *
   * @requires [_id]
   * @example
   * ```ts
   * const category: CategorySchema = {
   *  _id: '502goXVW3lIExEQPOnd3',
   *  label: 'Category Label',
   *  urlSlug: 'category-label',
   *  description: 'Category description',
   *  imageUrl: 'https://example.com/image.jpg',
   *  imageAltText: 'Category image alt text',
   *  locationId: '502goXVW3lIExEQPOnd3',
   *  updatedAt: '2022-01-01T00:00:00.000Z'
   * };
   * ```
   *
   * @property {string} _id - The unique identifier of the category.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} [label] - The public facing category label.
   * @example 'Category Label'
   *
   * @property {string} [urlSlug] - The category URL slug.
   * @example 'category-label'
   *
   * @property {string} [description] - The description of the category.
   * @example 'Category description'
   *
   * @property {string} [imageUrl] - The category image URL.
   * @example 'https://example.com/image.jpg'
   *
   * @property {string} [imageAltText] - Category image alt text for SEO optimization and accessibility.
   * @example 'Category image alt text'
   *
   * @property {string} [locationId] - The ID of the location the category is created on.
   * @example '502goXVW3lIExEQPOnd3'
   *
   * @property {string} [updatedAt] - The date the category was created.
   * @example '2022-01-01T00:00:00.000Z'
   */
  type CategorySchema = {
    /**
     * The unique identifier of the category.
     *
     * @required
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * '502goXVW3lIExEQPOnd3'
     * ```
     */
    _id: string /** Category ID */;

    /**
     * The public facing category label.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * 'Category Label'
     * ```
     */
    label?: string;

    /**
     * The category URL slug.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * 'category-label'
     * ```
     */
    urlSlug?: string;

    /**
     * The description of the category.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * 'Category description'
     * ```
     */
    description?: string;

    /**
     * The category image URL.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * 'https://example.com/image.jpg'
     * ```
     */
    imageUrl?: string;

    /**
     * Category image alt text for SEO optimization and accessibility.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * 'Category image alt text'
     * ```
     */
    imageAltText?: string;

    /**
     * The ID of the location the category is created on.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * '502goXVW3lIExEQPOnd3'
     * ```
     */
    locationId?: string;

    /**
     * The date the category was created.
     *
     * @type {string}
     * @memberof CategorySchema
     * @example
     * ```ts
     * '2022-01-01T00:00:00.000Z'
     * ```
     */
    updatedAt?: string;
  };

  /**
   * Represents the response of fetching categories.
   *
   * @requires [categories, count, traceId]
   * @memberof Blogs
   * @example
   * ```ts
   * const response: CategoriesResponseDTO = {
   *  categories: [
   *    {
   *      _id: '502goXVW3lIExEQPOnd3',
   *      label: 'Category Label',
   *      urlSlug: 'category-label',
   *      description: 'Category description',
   *      imageUrl: 'https://example.com/image.jpg',
   *      imageAltText: 'Category image alt text',
   *      locationId: '502goXVW3lIExEQPOnd3',
   *      updatedAt: '2022-01-01T00:00:00.000Z'
   *    }
   *  ],
   *  count: 1,
   *  traceId: '783d3b1e47ce4ec65w4n5e72'
   * };
   * ```
   *
   * @property {CategorySchema[]} [categories] - An array of categories within the account.
   * @example
   * ```ts
   * const category: CategorySchema[] = [
   *  {
   *    _id: '502goXVW3lIExEQPOnd3',
   *    label: 'Category Label',
   *    urlSlug: 'category-label',
   *    description: 'Category description',
   *    imageUrl: 'https://example.com/image.jpg',
   *    imageAltText: 'Category image alt text',
   *    locationId: '502goXVW3lIExEQPOnd3',
   *    updatedAt: '2022-01-01T00:00:00.000Z'
   *  }
   * ];
   * ```
   * @property {number} [count] - The number of categories returned by the request.
   * @example 1
   *
   * @property {string} [traceId] - The unique identifier for the request.
   * @example '783d3b1e47ce4ec65w4n5e72'
   */
  export type CategoriesResponseDTO = {
    /**
     * An array of categories within the account.
     *
     * @required
     * @type {CategorySchema[]}
     * @memberof CategoriesResponseDTO
     * @example
     * ```ts
     * const category: CategorySchema[] = [
     *  {
     *    _id: '502goXVW3lIExEQPOnd3',
     *    label: 'Category Label',
     *    urlSlug: 'category-label',
     *    description: 'Category description',
     *    imageUrl: 'https://example.com/image.jpg',
     *    imageAltText: 'Category image alt text',
     *    locationId: '502goXVW3lIExEQPOnd3',
     *    updatedAt: '2022-01-01T00:00:00.000Z'
     *  }
     * ];
     * ```
     */
    categories: CategorySchema[];

    /**
     * The number of categories returned by the request.
     *
     * @required
     * @type {number}
     * @memberof CategoriesResponseDTO
     * @example
     * ```ts
     * 1
     * ```
     */
    count: number;

    /**
     * The unique identifier for the request.
     *
     * @required
     * @type {string}
     * @memberof CategoriesResponseDTO
     * @example
     * ```ts
     * '783d3b1e47ce4ec65w4n5e72'
     * ```
     */
    traceId: string;
  };
}
