const webpack = require("webpack");

module.exports = {
  devServer: {
    open: true,
    proxy: {
      '/api/mapeditor': {
        target: 'http://localhost:5001/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
