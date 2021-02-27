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

  jwtKey: process.env.JWT_KEY,

  // databaseName: 'stoneDEV',
  // databaseType: 'postgres',
  // databaseHost: 'localhost',
  // databasePort: 5432,
  // databaseUsername: 'postgres',
  // databasePassword: 'reallyStrongPwd123',

  // connectionPort: 5000,

  // jwtKey: 'b79a28f31aa7d9468a130ca09146a1d6',
};
