export {
  replaceRegex,
  RE_NEW_LINE,
  RE_MULTI_SPACE,
  RE_SVG_OPEN_TAG,
  RE_PATH_TAG,
  RE_HTML_COMMENTS,
};

const RE_NEW_LINE = /\n/g;
const RE_MULTI_SPACE = /\s+/g;
const RE_SVG_OPEN_TAG = /<svg([^>]+)>/gi;
const RE_PATH_TAG = /<path([^>]+)(\/)>/gi;
const RE_HTML_COMMENTS = /<!--[\s\S]*?-->/g;

const replaceRegex = (re, value) => (string) => string.replace(re, value);
