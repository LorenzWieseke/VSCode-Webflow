const path = require("path");
 
module.exports = {
  mode: "development",
  entry: {
    ["global"]: "./src/index.js",
    // ["home-page"]: "./src/home-page.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
    clean: true,
  },
};
 