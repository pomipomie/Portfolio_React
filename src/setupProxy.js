const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/pdata',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};

/*  to paste in package.json:

  "proxy": "http://localhost:8080",
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },

*/