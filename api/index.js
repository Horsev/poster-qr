import { faIcon, noNewline, uglifyJS } from "../helpers/pug-filters.js";
import getPageData from "../data/index.js";

const clientID = "pubkedsconfig";

const createCompanyPage = async (request, result) => {
  const filters = {
    "uglify-js": uglifyJS,
    "no-newline": noNewline,
    "fa-icon": faIcon,
  };

  const pageData = await getPageData(clientID);

  const templateData = {
    ...pageData,
    filters,
  };

  const template = templateData.isError ? "error.pug" : "index.pug";
  result.render(template, templateData);
};

export default createCompanyPage;
