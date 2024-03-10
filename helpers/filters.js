import { minify } from "uglify-js";

import { compose } from "./fp.js";

export { faIcon, noNewline, uglifyJS };

const replaceRegex = (re, value) => (string) => string.replace(re, value);

const reHTMLComments = /<!--[\s\S]*?-->/g;
const reMultiSpace = /\s+/g;

const addClassToSvgTag = (cssClass) =>
  replaceRegex(/<svg([^>]+)>/, `<svg$1 class="${cssClass}">`);

const addAttributeFillToPathTag = (pathFill) =>
  replaceRegex(/<path([^>]+)(\/)>/, `<path$1 fill="${pathFill}" />`);

const removeHTMLComments = replaceRegex(reHTMLComments, "");

const removeMultispaces = replaceRegex(reMultiSpace, " ");

const faIconFilter = compose(
  removeMultispaces,
  removeHTMLComments,
  addAttributeFillToPathTag("currentColor"),
  addClassToSvgTag("svg-inline--fa"),
);

const faIcon = faIconFilter;

const noNewline = (html) => html.replace(/\n/g, " ");

const uglifyJS = (script) => minify(script).code;
