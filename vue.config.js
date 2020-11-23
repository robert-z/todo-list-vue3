// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src', 'ui', 'components')
      }
    },
    entry: {
      app: path.join(__dirname, 'src', 'ui', 'main.ts')
    }
  }
};
