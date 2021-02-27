import jwt from 'jsonwebtoken';

import { envConfigs } from '../Configs/env-configs';

const key = envConfigs.jwtKey;

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
