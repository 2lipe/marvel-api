const path = require('path');

const type = process.env.DATABASE_TYPE;
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const url = `postgres://${username}:${password}@${host}:${port}/${database}`;

const entitiesPath = path.resolve(__dirname, 'src', 'Domain', 'Entities', '*.ts');
const migrationsPath = path.resolve(__dirname, 'src', 'Infrastructure', 'Database', 'Migrations', '*.ts');
const entitiesDir = path.resolve(__dirname, 'src', 'Domain', 'Entities');
const migrationsDir = path.resolve(__dirname, 'src', 'Infrastructure', 'Database', 'Migrations');

module.exports = {
  name: 'default',
  type: type,
  url: url,
  entities: [entitiesPath],
  migrations: [migrationsPath],
  synchroize: true,
  migrationsRun: true,
  autoLoadEntities: true,
  cli: {
    entitiesDir: entitiesDir,
    migrationsDir: migrationsDir,
  },
};
