import { Server } from './server';

import { envConfig } from './Helpers/env-configs';
import { serverError } from './Helpers/http-error-helpers';

(async (): Promise<void> => {
  const server = new Server(envConfig.connectionPort!);

  try {
    await server.init();

    server.start();
  } catch (error) {
    serverError(error);
  }
})();
