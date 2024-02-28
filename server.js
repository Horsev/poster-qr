import express, { static as staticFolder } from "express";
import compression from "compression";
import createPage from "./api/index.js";
import createErrorPage from "./api/error.js";

const { PORT } = process.env;
const { log } = console;

const app = express();

app.use(compression());

const startingMessage = `\nServer is running on http://localhost:${PORT}\n`;

app.set("view engine", "pug");

app.use(staticFolder("browser/public"));
app.set("views", "browser/views");

app.get("/", createPage);

const error404page = createErrorPage("Сторінка не знайдена");

const handle404Error = (template) => (request, result) => {
  const pageNotFound = 404;
  result.status(pageNotFound);
  template(request, result);
};

app.use(handle404Error(error404page));

app.listen(PORT, log(startingMessage));
