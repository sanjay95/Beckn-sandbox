import config from 'nconf';

config.file(`${__dirname}/config_data.json`);
// config.file(`$/config_data.json`);

export default config;