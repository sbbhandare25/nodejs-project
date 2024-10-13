import express from "express";
import compression from "compression";
import routes from "@api/routes";

const app = express();

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

export default app;
