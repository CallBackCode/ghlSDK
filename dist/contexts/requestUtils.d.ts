export declare const makeRequest: <T>(method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE", url: string, authToken: string, Version?: string, body?: Record<string, any> | null, contentType?: string) => Promise<T>;
export declare const withExponentialBackoff: <T>(fn: () => Promise<T>, maxRetries?: number, baseDelay?: number) => Promise<T>;
export declare const isRetryableError: (error: any) => boolean;
declare const _default: {
    makeRequest: <T>(method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE", url: string, authToken: string, Version?: string, body?: Record<string, any> | null, contentType?: string) => Promise<T>;
    withExponentialBackoff: <T>(fn: () => Promise<T>, maxRetries?: number, baseDelay?: number) => Promise<T>;
    isRetryableError: (error: any) => boolean;
};
export default _default;
