import { getConnection } from 'typeorm';
import supertest from 'supertest';

import { Server } from '../Api/server';

beforeAll(async () => {
  const server = new Server('5000');

  await server.init();

  global.testRequest = supertest(server.getServer());
});

afterAll(async () => {
  const connection = getConnection();

  await connection.dropDatabase();

  await connection.close();
});
