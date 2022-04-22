import {NextFunction, Request, Response} from "express";

export function errorHandlingMiddleware(error: Error, req: Request, res: Response): void {
    res.status(400).send({err: error.message});
}
