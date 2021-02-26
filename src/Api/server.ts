import 'reflect-metadata';

import express, { Application, Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { DatabaseConnection } from '../Infrastructure/Database';
import { serverError } from '../Api/Helpers/http-error-helpers';
import { envConfig } from '../Api/Configs/env-configs';

export class Server {
  protected _port: string;
  protected _server: Express;

  constructor(port: string) {
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

  public start(): void {
    this._server.listen(envConfig.connectionPort || this._port, () => {
      console.info(`This server is listening on http://localhost:${envConfig.connectionPort || this._port}`);
    });
  }

  public getServer(): Application {
    return this._server;
  }
}
