import { faIcon, noNewline, uglifyJS } from "../helpers/filters.js";
import pageData from "../data/index.js";

const createCompanyPage = async (request, result) => {
  let templateData = {};

  const filters = {
    "uglify-js": uglifyJS,
    "no-newline": noNewline,
    "fa-icon": faIcon,
  };

  try {
    templateData = {
      ...pageData(),
      filters,
    };
  } catch ({ message }) {
    templateData = {
      error: true,
      message: `Помилка: ${message}`,
      filters,
    };
  } finally {
    const template = templateData.error ? "error.pug" : "index.pug";
    result.render(template, templateData);
  }
};

export default createCompanyPage;
