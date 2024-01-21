const minifyjs = require("terser").minify;
const minifyhtml = require("html-minifier").minify;
const cssnano = require("cssnano");
const postcss = require("postcss");

const fs = require("fs");
let jsCode = fs.readFileSync("src/index.js", "utf-8");
let cssCode = fs.readFileSync("src/index.css", "utf-8");
let htmlCode = fs.readFileSync("src/index.html", "utf-8");

fs.writeFileSync("docs/index.html", minifyhtml(htmlCode, {caseSensitive: true, collapseWhitespace: true, collapseInlineTagWhitespace: true, removeAttributeQuotes: true, removeComments: true, removeEmptyAttributes: true, removeRedundantAttributes: true, minifyCSS: true}))
minifyjs(jsCode, {toplevel: true}).then(c => fs.writeFileSync("docs/index.js", c.code));
postcss([cssnano({preset: 'default'})]).process(cssCode, {from: undefined}).then(c => fs.writeFileSync("docs/index.css", c.css));