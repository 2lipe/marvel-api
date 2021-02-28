import * as dotenv from 'dotenv';

dotenv.config();

export const envConfigs = {
  connectionPort: process.env.SERVER_PORT,

  jwtKey: process.env.JWT_KEY,

  apiMarvelUrl: process.env.MARVEL_URL,
  apiMarvelHash: process.env.MARVEL_HASH,
  apiMarvelKey: process.env.MARVEL_API_KEY,
  apiMarvelTS: process.env.TIME_SPAN,
};
