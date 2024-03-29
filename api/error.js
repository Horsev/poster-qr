import { uglifyJS, noNewline, faIcon } from "../filters/index.js";

const PAGE_NOT_FOUND = 404;
const FILTERS = {
  "uglify-js": uglifyJS,
  "no-newline": noNewline,
  "fa-icon": faIcon,
};

const setStatus = (status, result) => result.status(status);

const templateSettings = (filters) => (message) => ({
  filters,
  error: true,
  message,
});

const errorTemplate = templateSettings(FILTERS);

const renderErrorPage = (message, result) =>
  result.render("error.pug", errorTemplate(message));

const handle404Error = (message, result) => {
  setStatus(PAGE_NOT_FOUND, result);
  renderErrorPage(message, result);
};

const create404Page = (message) => (_, result) =>
  handle404Error(message, result);

export default create404Page;
