const { createRequestHandler } = require("@remix-run/netlify");
console.log("ENV: " + process.env.NODE_ENV);
exports.handler = createRequestHandler({
  build: require("./build")
});
