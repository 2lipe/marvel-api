import { getConnection } from 'typeorm';
import supertest from 'supertest';

import { Server } from '../Api/server';

beforeAll(async () => {
  try {
    const server = new Server('3000');

    await server.init();

    global.testRequest = supertest(server.getServer());
  } catch (err) {
    throw new Error(err);
  }
});

afterAll(async () => {
  try {
    const connection = getConnection();

    await connection.dropDatabase();

    await connection.close();
  } catch (err) {
    throw new Error(err);
  }
});
