import config from './config.json';


const environment = process.env.NODE_ENV || 'development';
const defaultConfig = config.development;
const environmentConfig = config[environment];
global.globalConfig = Object.assign(defaultConfig, environmentConfig);


