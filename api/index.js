import { faIcon, noNewline, uglifyJS } from "../helpers/pug-filters.js";
import getPageData from "../data/index.js";

const createCompanyPage = async (request, result) => {
  const filters = {
    "uglify-js": uglifyJS,
    "no-newline": noNewline,
    "fa-icon": faIcon,
  };

  let templateData = {};

  try {
    const pageData = await getPageData();
    templateData = {
      ...pageData,
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
