import { faIcon, noNewline, uglifyJS } from "../filters/index.js";
import getClientData from "../data/index.js";

const CLIENT_ID = "pubkedsconfig";
const FILTERS = {
  "uglify-js": uglifyJS,
  "no-newline": noNewline,
  "fa-icon": faIcon,
};

const createCompanyPage = async (_, result) => {
  const clientData = await getClientData(CLIENT_ID);
  const templateData = {
    ...clientData,
    filters: FILTERS,
  };

  const template = templateData.isError ? "error.pug" : "index.pug";
  result.render(template, templateData);
};

export default createCompanyPage;
