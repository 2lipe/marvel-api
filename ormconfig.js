const { envConfig } = require('./src/shared/helpers/env-configs');

module.exports = [
  {
    name: 'default',
    type: envConfig.databaseType,
    host: envConfig.databaseHost,
    port: envConfig.databasePort,
    username: envConfig.databaseUsername,
    password: envConfig.databasePassword,
    database: envConfig.databaseName,
    entities: ['./src/domain/entities/*.ts'],
    migrations: ['../src/infrastructure/database/migrations/*.ts'],
    cli: {
      entitiesDir: './src/domain/entities/',
      migrationsDir: './src/infrastructure/database/migrations/',
    },
  },
];
