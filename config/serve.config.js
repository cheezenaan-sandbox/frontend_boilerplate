const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'development',
  serve: {
    host: '0.0.0.0',
    hot: {
      host: {
        server: '0.0.0.0',
        client: process.env.LOCAL_IP || '0.0.0.0',
      },
    },
  },
};
