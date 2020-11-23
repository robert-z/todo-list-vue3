// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  configureWebpack: {
    entry: {
      app: path.join(__dirname, 'src', 'ui', 'main.ts')
    }
  }
};
