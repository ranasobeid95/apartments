import { Request, Response, NextFunction } from "express";

export interface MongooseValidationError extends Error {
  code?: number;
  message: string;
  errors?: {
    [key: string]: {
      properties: {
        path: string;
        message: string;
      };
    };
  };
}

interface ErrorHandleResult {
  email?: string;
  password?: string;
  [key: string]: string | undefined;
}

export const errorHandle = (
  error: MongooseValidationError
): ErrorHandleResult => {
  const errors: ErrorHandleResult = {};

  // Handle Mongoose validation errors
  if (error.message.includes("validation failed")) {
    if (error.errors) {
      Object.values(error.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  }

  return errors;
};

export const clientError = (req: Request, res: Response): void => {
  res
    .status(404)
    .json({ StatusCode: "404", data: { message: "page not found 404" } });
};

export const serverError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err); // Log the error to console for debugging purposes

  res.status(500).json({
    StatusCode: "500",
    data: { message: "internal server error 500", err: `${err}` },
  });
};
