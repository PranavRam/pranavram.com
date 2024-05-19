const { createRequestHandler } = require("@remix-run/netlify");

export default createRequestHandler({ build: require("./api") });
