import { minify } from "uglify-js";
import faIcon from "./fontawesome.js";
import { replaceRegex, RE_NEW_LINE } from "../helpers/regexp.js";

export { faIcon, noNewline, uglifyJS };

const removeNewLines = replaceRegex(RE_NEW_LINE, "");

const noNewline = (html) => removeNewLines(html);

const uglifyJS = (script) => minify(script).code;
