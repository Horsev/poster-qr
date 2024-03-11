import { minify } from "uglify-js";

import { compose } from "./fp.js";

export { faIcon, noNewline, uglifyJS };

const FONTAWESOME_CLASS = "svg-fa";
const DEFAULT_FILL_COLOR = "currentColor";

const RE_HTML_COMMENTS = /<!--[\s\S]*?-->/g;
const RE_MULTI_SPACE = /\s+/g;
const RE_SVG_OPEN_TAG = /<svg([^>]+)>/gi;
const RE_PATH_TAG = /<path([^>]+)(\/)>/gi;

const replaceRegex = (re, value) => (string) => string.replace(re, value);
const removeHTMLComments = replaceRegex(RE_HTML_COMMENTS, "");
const removeMultispaces = replaceRegex(RE_MULTI_SPACE, " ");

const setClassToSVG = (iconName, defaultClass) =>
  `<svg$1 class="fa-${iconName} ${defaultClass}">`;

const setPathFill = (pathFill) => `<path$1 fill="${pathFill}" />`;

const addClassToFaIcon =
  (defaultClass) =>
  ({ html, iconName }) =>
    html.replace(RE_SVG_OPEN_TAG, setClassToSVG(iconName, defaultClass));

const extractIconName = (html, { filename }) => ({
  html,
  iconName: filename.split("/").pop().split(".")[0],
});

const addAttributeFillToFaIcon = (pathFill) =>
  replaceRegex(RE_PATH_TAG, setPathFill(pathFill));

const faIcon = compose(
  removeMultispaces,
  removeHTMLComments,
  addAttributeFillToFaIcon(DEFAULT_FILL_COLOR),
  addClassToFaIcon(FONTAWESOME_CLASS),
  extractIconName,
);

const noNewline = (html) => html.replace(/\n/g, " ");

const uglifyJS = (script) => minify(script).code;
