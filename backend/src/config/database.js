require('dotenv').config();

const config = {
    default: {
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      dialect: process.env.DATABASE_DIALECT || 'postgres',
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST || '127.0.0.1',
    },
    development: {
      extend: 'default',
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      dialect: process.env.DATABASE_DIALECT || 'postgres',
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST || '127.0.0.1',
    },
    test: {
      extend: 'default',
      database: process.env.DB_NAME,
    },
    production: {
      extend: 'default',
      use_env_variable: 'DATABASE_URL',
    },
  };
  
  Object.keys(config).forEach((configKey) => {
    const configValue = config[configKey];
    if (configValue.extend) {
      config[configKey] = { ...config[configValue.extend], ...configValue };
    }
  });
  
  module.exports = config;
