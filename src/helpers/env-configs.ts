import * as dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  databaseName: process.env.DATABASE_NAME,
  databaseType: process.env.DATABASE_TYPE,
  databaseHost: process.env.DATABASE_HOST,
  databasePort: process.env.DATABASE_PORT,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,

  connectionPort: process.env.SERVER_PORT,
};
