import { NextFunction, Request, Response } from "express";
import { DevlopementEnviorment } from "../consts";
import Exception from "../exceptions/expetion";

const env = process.env.NODE_ENV || DevlopementEnviorment;

export default class ErrorHandlerController {
    public static InternalError(
        err: Error,
        req: Request,
        res: Response,
        next: NextFunction): void {
        const message = err.message || `InternalServerError`;
        if (env === DevlopementEnviorment) {
            console.log(`That esclate quickly! ${message}`);
        }

        let statusCode = 500;
        if (err instanceof  Exception) {
            const exception = err as Exception;
            statusCode = exception.statusCode;
        }
        res.status(statusCode).send(JSON.stringify({ error:  message}));
    }
}
