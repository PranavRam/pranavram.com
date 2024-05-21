/** @type {import('@remix-run/dev').AppConfig} */

const rehypePrettyCode = require('rehype-pretty-code');

/** @type {import('rehype-pretty-code').Options} */
const options = {
  // Use one of Shiki's packaged themes
  theme: 'solarized-dark',
 
  // Keep the background or use a custom background color?
  keepBackground: true,
 
  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
};

module.exports = {
  serverBuildTarget: "vercel",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  ignoredRouteFiles: ["**/.*"],
  // serverBuildTarget: "vercel",
  // // When running locally in development mode, we use the built in remix
  // // server. This does not understand the vercel lambda module format,
  // // so we default back to the standard build output.
  // server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  // ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // browserBuildDirectory: "public/build",
  // // serverBuildPath: "netlify/functions/build/index.js",
  // serverBuildDirectory: "netlify/functions/server/build",
  // publicPath: "/build/",
  mdx: async (filename) => {
    const [rehypeHighlight, rehypeExternalLinks] = await Promise.all([
      import("rehype-highlight").then((mod) => mod.default),
      import("rehype-external-links").then((mod) => mod.default),
    ]);

    return {
      // rehypePlugins: [
      //   rehypeHighlight,
      //   (params) =>
      //     rehypeExternalLinks({
      //       ...params,
      //       rel: ["noopener", "noreferrer"],
      //       target: "_blank",
      //     }),
      // ],
      rehypePlugins: [[rehypePrettyCode, options]],
      remarkPlugins: [],
    };
  },
};
