const path = require('path');

const entitiesPath = path.resolve(__dirname, 'src', 'Domain', 'Entities', '*.ts');
const migrationsPath = path.resolve(__dirname, 'src', 'Infrastructure', 'Database', 'Migrations', '*.ts');
const entitiesDir = path.resolve(__dirname, 'src', 'Domain', 'Entities');
const migrationsDir = path.resolve(__dirname, 'src', 'Infrastructure', 'Database', 'Migrations');

module.exports = [
  {
    name: 'default',
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    autoLoadEntities: true,
    synchronize: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
    cli: {
      entitiesDir: entitiesDir,
      migrationsDir: migrationsDir,
    },
  },
];
