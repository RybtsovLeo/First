import dotenv from "dotenv";
import {IEnvironment} from "./interfaces/environment.interface";

dotenv.config();

const config = {
    node_environment: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    // database_url: process.env.DATABASE,
}

export default (config as IEnvironment);
