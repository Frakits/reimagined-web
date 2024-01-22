const minifyjs = require("terser").minify;
const minifyhtml = require("html-minifier").minify;
const cssnano = require("cssnano");
const postcss = require("postcss");
const sass = require("sass");

const fs = require("fs");
let jsCode = fs.readFileSync("src/index.js", "utf-8");
let cssCode = sass.compile("src/index.scss");
let htmlCode = fs.readFileSync("src/index.html", "utf-8");

fs.cpSync("src/assets", "docs/assets", {recursive: true});
fs.writeFileSync("docs/index.html", minifyhtml(htmlCode, {caseSensitive: true, collapseWhitespace: true, collapseInlineTagWhitespace: true, removeAttributeQuotes: true, removeComments: true, removeEmptyAttributes: true, removeRedundantAttributes: true, minifyCSS: true}))
minifyjs(jsCode, {toplevel: true}).then(c => fs.writeFileSync("docs/index.js", c.code));
postcss([cssnano({preset: 'default'})]).process(cssCode, {from: undefined}).then(c => fs.writeFileSync("docs/index.css", c.css));