import express, { static as staticFolder } from "express";
import compression from "compression";
import createPage from "./api/index.js";
import create404Page from "./api/error.js";

const { PORT } = process.env;
const STARTING_MESSAGE = `\nServer is running on http://localhost:${PORT}\n`;

const PUBLIC_FOLDER_PATH = "client/public";
const TEMPLATES_FOLDER_PATH = "templates/views";
const TEMPLATE_ENGINE = "pug";

const defaultCompression = compression();
const publicFolder = staticFolder(PUBLIC_FOLDER_PATH);

const { log } = console;

const app = express();

app.set("views", TEMPLATES_FOLDER_PATH);
app.set("view engine", TEMPLATE_ENGINE);

app.get("/", createPage);

app.use(defaultCompression);
app.use(publicFolder);
app.use(create404Page("Сторінка не знайдена"));

app.listen(PORT, log(STARTING_MESSAGE));
