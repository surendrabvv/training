// Third party modules
const redis = require('redis');
const bluebird = require('bluebird');

// Promisyfying all redis client methods
bluebird.promisifyAll(redis);