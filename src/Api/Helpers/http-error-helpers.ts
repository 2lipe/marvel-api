import { NextFunction, Response } from 'express';

export type HttpResponse = {
  success: boolean;
  statusCode: number;
  body: unknown;
  message: string;
};

export const unauthorized = (message: string): HttpResponse => ({
  success: false,
  statusCode: 401,
  body: {},
  message: message,
});

export const serverError = (error: Error): HttpResponse => ({
  success: false,
  statusCode: 500,
  body: {},
  message: `Server Error: ${error.message}`,
});

export const ok = (data: unknown, message: string): HttpResponse => ({
  success: true,
  statusCode: 200,
  body: data,
  message: message,
});

export const genericError = (data: unknown, statusCode: number, message: string): HttpResponse => ({
  success: false,
  statusCode: statusCode,
  body: data,
  message: message,
});

export const userNotExistError = (): HttpResponse => ({
  success: false,
  statusCode: 404,
  body: {},
  message: 'User Does Not Exist',
});

export const emailError = (): HttpResponse => ({
  success: false,
  statusCode: 403,
  body: {},
  message: 'Email In Use Error',
});

export const responseTreated = (response: HttpResponse, res: Response) => {
  return res.status(response.statusCode).json({
    data: response.body,
    message: response.message,
    success: response.success,
  });
};

export const joiResponseError = (err: any, res: Response, next: NextFunction) => {
  return err.isJoi === true ? res.status(422).json(err) : next(err);
};
