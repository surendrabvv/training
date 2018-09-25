// Third party modules
const path = require('path');

// Other constants
const env = process.env.NODE_ENV || 'development';
const configDir = path.join(`${__dirname}/config`);

class Config {
  constructor() {
    this.config = Object.assign(require(`${configDir}/${env}.js`), {
      env
    });
  }

  static get(key) {
    if (!key) {
      return null;
    }
    return this.config(key);
  }
}

module.exports = new Config();