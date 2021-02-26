import jwt from 'jsonwebtoken';

import { envConfig } from '../Configs/env-configs';

const key = envConfig.jwtKey;

export function generateJwtToken(userId: string) {
  const token = jwt.sign({ userId }, key!);

  return token;
}

export async function decodeJwtToken(token: string): Promise<unknown> {
  let tokenDecoded: unknown = null;

  jwt.verify(token, key!, (err, decoded) => {
    decoded ? (tokenDecoded = decoded) : (tokenDecoded = null);
  });

  return tokenDecoded;
}
