const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const path = require('path');
const fs = require('fs');

const saveWebpackJson = (config) => {
  const tmpDir = path.resolve(__dirname, 'tmp');
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  fs.writeFileSync(path.resolve(tmpDir, `webpack.json`), JSON.stringify(config), { encoding: 'utf-8', });
};

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  saveWebpackJson(config);
  return config;
});
