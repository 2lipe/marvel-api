const { envConfig } = require('./src/Api/Configs/env-configs');

const host = envConfig.databaseHost;
const port = envConfig.databasePort;
const username = envConfig.databaseUsername;
const password = envConfig.databasePassword;
const database = envConfig.databaseName;

const url = `postgres://${username}:${password}@${host}:${port}/${database}`;

module.exports = {
  name: 'default',
  type: 'postgres',
  url: url,
  entities: ['./src/Domain/Entities/*.ts'],
  migrations: ['./src/Infrastructure/Database/Migrations/*.ts'],
  synchroize: true,
  migrationsRun: true,
  autoLoadEntities: true,
  cli: {
    entitiesDir: './src/Domain/Entities/',
    migrationsDir: './src/Infrastructure/Database/Migrations/',
  },
};
