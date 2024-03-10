import { uglifyJS, noNewline, faIcon } from "../helpers/pug-filters.js";

const createErrorPage = (message) => async (result) => {
  const templateData = {
    error: true,
    message,
    filters: {
      "uglify-js": uglifyJS,
      "no-newline": noNewline,
      "fa-icon": faIcon,
    },
  };

  const template = "error.pug";

  result.render(template, templateData);
};

export default createErrorPage;
