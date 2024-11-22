export const makeRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  authToken: string,
  Version: string = "2021-07-28",
  body: Record<string, any> | null = null,
  contentType: string = "application/json"
): Promise<T> => {
  const headers: Record<string, string> = {
    Accept: "application/json",
    Version,
    Authorization: `Bearer ${authToken}`,
  };

  if (body && contentType) {
    headers["Content-Type"] = contentType;
  }

  const options: RequestInit = {
    method,
    headers,
    body: body
      ? contentType === "application/json"
        ? JSON.stringify(body)
        : contentType === "application/x-www-form-urlencoded"
        ? new URLSearchParams(body as any).toString()
        : (body as any) // Handle other types as raw body
      : null,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorDetails = await response.text();
      const error = new Error(
        `Request failed with status ${response.status}: ${errorDetails}`
      );
      (error as any).response = response;
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error("Error during request:", error);
    throw error;
  }
};

export const withExponentialBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries = 5,
  baseDelay = 200
): Promise<T> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn(); // Execute the request
    } catch (error) {
      if (attempt === maxRetries) throw error; // Rethrow after max retries

      if (!isRetryableError(error)) throw error; // Skip retries for non-retryable errors

      const jitter = Math.random() * 100; // Random jitter
      const delay = baseDelay * Math.pow(2, attempt) + jitter;

      console.warn(
        `Retry attempt ${attempt} failed. Retrying in ${delay}ms...`
      );
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

export const isRetryableError = (error: any): boolean => {
  return (
    error?.response?.status &&
    [429, 500, 502, 503, 504].includes(error.response.status)
  );
};

export default {
  makeRequest,
  withExponentialBackoff,
  isRetryableError,
};
