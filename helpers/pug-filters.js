import { minify } from "uglify-js";

import { compose } from "./fp.js";

export { faIcon, noNewline, uglifyJS };

const FONTAWESOME_CLASS = "svg-fa";
const DEFAULT_FILL_COLOR = "currentColor";

const replaceRegex = (re, value) => (string) => string.replace(re, value);

const reHTMLComments = /<!--[\s\S]*?-->/g;
const reMultiSpace = /\s+/g;

const addClassToFaIcon =
  (defaultClass) =>
  (html, { filename }) => {
    const [iconName] = filename.split("/").pop().split(".");

    return html.replace(
      /<svg([^>]+)>/,
      `<svg$1 class="fa-${iconName} ${defaultClass}">`,
    );
  };

const addAttributeFillToFaIcon = (pathFill) =>
  replaceRegex(/<path([^>]+)(\/)>/, `<path$1 fill="${pathFill}" />`);

const removeHTMLComments = replaceRegex(reHTMLComments, "");

const removeMultispaces = replaceRegex(reMultiSpace, " ");

const faIcon = compose(
  removeMultispaces,
  removeHTMLComments,
  addAttributeFillToFaIcon(DEFAULT_FILL_COLOR),
  addClassToFaIcon(FONTAWESOME_CLASS),
);

const noNewline = (html) => html.replace(/\n/g, " ");

const uglifyJS = (script) => minify(script).code;
