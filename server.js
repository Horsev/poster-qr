import express, { static as staticFolder } from "express";
import compression from "compression";
import createPage from "./api/index.js";
import create404Page from "./api/error.js";

const { PORT } = process.env;

const STARTING_MESSAGE = `\nServer is running on http://localhost:${PORT}\n`;
const PUBLIC_FOLDER_PATH = "client/public";
const TEMPLATES_FOLDER_PATH = "templates/views";
const TEMPLATE_ENGINE = "pug";
const ERROR_MESSAGE = "Сторінка не знайдена";

const defaultCompression = compression();
const publicFolder = staticFolder(PUBLIC_FOLDER_PATH);
const pageNotFound = create404Page(ERROR_MESSAGE);

const { log } = console;
const showStartMessage = log(STARTING_MESSAGE);

const app = express();

app.get("/", createPage);

app.set("views", TEMPLATES_FOLDER_PATH);
app.set("view engine", TEMPLATE_ENGINE);

app.use(defaultCompression);
app.use(publicFolder);
app.use(pageNotFound);

app.listen(PORT, showStartMessage);
