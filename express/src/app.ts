import { swaggerDocument } from "./swagger/swagger";
import express from "express";
import { router } from "./routes";
import swaggerUi from "swagger-ui-express"
import cors from "cors";
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(router);

export { app };
