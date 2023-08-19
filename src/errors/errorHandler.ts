import { Request, Response } from "express";
import { AppError } from "./AppError";
import { ZodError, ZodErrorMap } from "zod";
import { zodFieldErrors } from "../interfaces/utils";

export function errorHandler(
  error: Error,
  request: Request,
  response: Response
) {
  let statusCode = 500;
  let errorMessage: zodFieldErrors | string = error.message;

  if (error instanceof AppError) {
    statusCode = error.statusCode;
  } else if (error instanceof ZodError) {
    statusCode = 400;
    errorMessage = error.flatten().fieldErrors;
  }

  return response.status(statusCode).json(errorMessage);
}
