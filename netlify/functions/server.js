const { createRequestHandler } = require("@remix-run/remix-adapter");

import * as build from "@remix-run/dev/server-build"
console.log("Routes:", build.routes);

export default createRequestHandler({ build: require("./build") });
