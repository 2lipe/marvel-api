import { Server } from './server';

import { envConfig } from './helpers/env-configs';
import { serverError } from './helpers/http-error-helpers';

(async (): Promise<void> => {
  const server = new Server(envConfig.connectionPort!);

  try {
    await server.init();

    server.start();
  } catch (error) {
    serverError(error);
  }
})();
