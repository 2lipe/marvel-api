const path = require('path');

require('dotenv').config();

const type = process.env.DATABASE_TYPE;
const host = process.env.DATABASE_HOST;
const port = process.env.DATABASE_PORT;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const entitiesPath = path.resolve(__dirname, 'dist', 'Domain', 'Entities', '*.js');
const migrationsPath = path.resolve(__dirname, 'dist', 'Infrastructure', 'Database', 'Migrations', '*.js');
const entitiesDir = path.resolve(__dirname, 'dist', 'Domain', 'Entities');
const migrationsDir = path.resolve(__dirname, 'dist', 'Infrastructure', 'Database', 'Migrations');

const url = `postgres://${username}:${password}@${host}:${port}/${database}`;

module.exports = [
  // {
  //   name: 'default',
  //   type: type,
  //   host: host,
  //   port: port,
  //   username: username,
  //   password: password,
  //   database: database,
  //   logging: false,
  //   entities: [entitiesPath],
  //   migrations: [migrationsPath],
  //   cli: {
  //     entitiesDir: entitiesDir,
  //     migrationsDir: migrationsDir,
  //   },
  // },
  {
    name: 'production',
    type: type,
    url: url,
    logging: false,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    entities: [entitiesPath],
    migrations: [migrationsPath],
    cli: {
      entitiesDir: entitiesDir,
      migrationsDir: migrationsDir,
    },
  },
  {
    name: 'test',
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    logging: false,
    synchroize: true,
    migrationsRun: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
    cli: {
      entitiesDir: entitiesDir,
      migrationsDir: migrationsDir,
    },
  },
];
