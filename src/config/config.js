import _ from 'lodash';
import config from './config.json';


const environment = process.env.NODE_ENV || 'development';
const defaultConfig = config.development;
const environmentConfig = config[environment];
global.globalConfig = _.merge(defaultConfig, environmentConfig);


