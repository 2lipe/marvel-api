const { envConfig } = require('./src/Api/Configs/env-configs');

module.exports = [
  {
    name: 'default',
    type: envConfig.databaseType,
    host: envConfig.databaseHost,
    port: envConfig.databasePort,
    username: envConfig.databaseUsername,
    password: envConfig.databasePassword,
    database: envConfig.databaseName,
    autoLoadEntities: true,
    synchronize: true,
    entities: ['./src/Domain/Entities/*.ts'],
    migrations: ['../src/Infrastructure/Database/Migrations/*.ts'],
    cli: {
      entitiesDir: './src/Domain/Entities/',
      migrationsDir: './src/Infrastructure/Database/Migrations/',
    },
  },
];
