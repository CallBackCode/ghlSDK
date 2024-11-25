export type BadRequestDTO = {
  statusCode?: number; // Status Code (400)
  message?: string; // Error Message (Bad Request)
};

export type UnauthorizedDTO = {
  statusCode?: number; // Status Code (401)
  message?: string; // Error Message (Invalid token: access token is invalid)
  error?: string; // Error Type (Unauthorized)
};

export type UnprocessableDTO = {
  statusCode?: number; // Status Code (422)
  message?: string; // Error Message (["Unprocessable Entity"])
  error?: string; // Error Type (Unprocessable Entity)
};

export type SuccessDeleteDTO = {
  success?: boolean; // Success Status (true)
};

export type SuccededDeleteDTO = {
  succeded?: boolean; // Success Status (true)
};
