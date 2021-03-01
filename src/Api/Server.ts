import 'reflect-metadata';

import express, { Application, Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swagger from '../swagger_output.json';

import { Routes } from './Routes/Routes';
import { DatabaseConnection } from '../Infrastructure/Database';
import { serverError } from './Helpers/http-error-helpers';
import { envConfigs } from './Configs/env-configs';
import { pathConfigs } from './Configs/path-configs';
import { authMiddleware } from './Middlewares/AuthMiddleware';
import { DATABASE_MESSAGES } from './Helpers/messages-helpers';

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
    this.routes();
  }

  private async getConnectionDatabase() {
    try {
      await DatabaseConnection();

      console.info(DATABASE_MESSAGES.successConnect);
    } catch (error) {
      serverError(error);
    }
  }

  private middlewares() {
    this._server.use(cors());
    this._server.use(helmet());
    this._server.use(express.urlencoded({ extended: true }));
    this._server.use(express.json());
    this._server.use(authMiddleware.unless(pathConfigs.unless));
    this._server.use('/swagger', swaggerUi.serve, swaggerUi.setup(swagger));
  }

  private routes() {
    this._server.use('/api', Routes);
  }

  public start(): void {
    this._server.listen(envConfigs.connectionPort || this._port, () => {
      console.info(`This server is listening on http://localhost:${envConfigs.connectionPort || this._port}`);
    });
  }

  public getServer(): Application {
    return this._server;
  }
}
