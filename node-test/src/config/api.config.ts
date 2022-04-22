import {Router} from "express";
import morgan from "morgan";
import { errorHandlingMiddleware } from "../middleware/errorHandlingMiddleware";
import configEnvironment from "./environment.config";
// import dataBaseConnect from "./database.config";

// dataBaseConnect();

const api: Router = Router();

if (configEnvironment.node_environment === "development") {
    api.use(morgan("dev"));
}

api.use(errorHandlingMiddleware);


export default api;
