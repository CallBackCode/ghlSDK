"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRetryableError = exports.withExponentialBackoff = exports.makeRequest = void 0;
const makeRequest = async (method, url, authToken, Version = "2021-07-28", body = null, contentType = "application/json") => {
    const headers = {
        Accept: "application/json",
        Version,
        Authorization: `Bearer ${authToken}`,
    };
    if (body && contentType) {
        headers["Content-Type"] = contentType;
    }
    const options = {
        method,
        headers,
        body: body
            ? contentType === "application/json"
                ? JSON.stringify(body)
                : contentType === "application/x-www-form-urlencoded"
                    ? new URLSearchParams(body).toString()
                    : body // Handle other types as raw body
            : null,
    };
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            const errorDetails = await response.text();
            const error = new Error(`Request failed with status ${response.status}: ${errorDetails}`);
            error.response = response;
            throw error;
        }
        return await response.json();
    }
    catch (error) {
        console.error("Error during request:", error);
        throw error;
    }
};
exports.makeRequest = makeRequest;
const withExponentialBackoff = async (fn, maxRetries = 5, baseDelay = 200) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await fn(); // Execute the request
        }
        catch (error) {
            if (attempt === maxRetries)
                throw error; // Rethrow after max retries
            if (!(0, exports.isRetryableError)(error))
                throw error; // Skip retries for non-retryable errors
            const jitter = Math.random() * 100; // Random jitter
            const delay = baseDelay * Math.pow(2, attempt) + jitter;
            console.warn(`Retry attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};
exports.withExponentialBackoff = withExponentialBackoff;
const isRetryableError = (error) => {
    return (error?.response?.status &&
        [429, 500, 502, 503, 504].includes(error.response.status));
};
exports.isRetryableError = isRetryableError;
exports.default = {
    makeRequest: exports.makeRequest,
    withExponentialBackoff: exports.withExponentialBackoff,
    isRetryableError: exports.isRetryableError,
};
//# sourceMappingURL=requestUtils.js.map