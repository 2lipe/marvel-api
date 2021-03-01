import { createConnection, Connection, getConnectionOptions } from 'typeorm';

export async function DatabaseConnection(): Promise<Connection> {
  try {
    const opt = await getConnectionOptions(process.env.NODE_ENV);

    return createConnection({ ...opt, name: 'default' });
  } catch (err) {
    throw new Error(err);
  }
}
