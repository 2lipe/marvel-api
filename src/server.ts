import 'reflect-metadata';

import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { DatabaseConnection } from './infrastructure/database';
import { serverError } from './helpers/http-error-helpers';

export class Server {
  protected _port: number;
  protected _server: Express;

  constructor(port: number) {
    this._server = express();
    this._port = port;
  }

  public async init(): Promise<void> {
    await this.getConnectionDatabase();

    this.middlewares();
  }

  private async getConnectionDatabase() {
    try {
      await DatabaseConnection();

      console.info('Success database connection!');
    } catch (error) {
      serverError(error);
    }
  }

  private middlewares() {
    this._server.use(cors());
    this._server.use(helmet());
    this._server.use(express.urlencoded({ extended: true }));
    this._server.use(express.json());
  }
}
