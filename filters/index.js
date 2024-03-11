import { minify } from "uglify-js";
import faIcon from "./fontawesome.js";

export { faIcon, noNewline, uglifyJS };

const RE_NEW_LINE = /\n/g;

const noNewline = (html) => html.replace(RE_NEW_LINE, " ");

const uglifyJS = (script) => minify(script).code;
