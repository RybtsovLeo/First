import express, {Application} from "express";
import configApi from "./config/api.config";
import configEnvironment from "./config/environment.config";

const app: Application = express();

app.use("/api", configApi);

app.listen(configEnvironment.port, () => console.log(`Server started at port ${configEnvironment.port}`));
