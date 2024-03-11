import { compose } from "../helpers/fp.js";
import {
  replaceRegex,
  RE_HTML_COMMENTS,
  RE_MULTI_SPACE,
  RE_SVG_OPEN_TAG,
  RE_PATH_TAG,
} from "../helpers/regexp.js";

const FONTAWESOME_CLASS = "svg-fa";
const DEFAULT_FILL_COLOR = "currentColor";

const removeHTMLComments = replaceRegex(RE_HTML_COMMENTS, "");
const removeMultispaces = replaceRegex(RE_MULTI_SPACE, " ");

const setClassToSVG = (iconName, defaultClass) =>
  `<svg$1 class="fa-${iconName} ${defaultClass}">`;

const setPathFill = (pathFill) => `<path$1 fill="${pathFill}" />`;

const addClassToFaIcon =
  (defaultClass) =>
  ({ html, iconName }) =>
    html.replace(RE_SVG_OPEN_TAG, setClassToSVG(iconName, defaultClass));

const getIconName = (filename) => {
  const [iconName] = filename.split("/").pop().split(".");
  return iconName;
};

const extractIconName = (html, { filename = "" }) => ({
  html,
  iconName: getIconName(filename),
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

export default faIcon;
