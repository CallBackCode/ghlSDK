"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestUtils_1 = require("../../contexts/requestUtils");
const baseUrl = "https://services.leadconnectorhq.com/oauth/token";
const getAccessToken = async options => {
  const executeRequest = async () => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: new URLSearchParams(options),
    });
    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      error.response = response;
      throw error;
    }
    return response.json();
  };
  try {
    const data = await (0, requestUtils_1.withExponentialBackoff)(
      executeRequest
    );
    return data;
  } catch (error) {
    console.error("Failed after retries:", error);
    return null;
  }
};
exports.default = getAccessToken;
//# sourceMappingURL=getAccessToken.js.map
