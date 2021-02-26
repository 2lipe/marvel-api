import { Server } from './server';

import { envConfig } from './Api/Configs/env-configs';
import { serverError } from './Api/Helpers/http-error-helpers';

(async (): Promise<void> => {
  const server = new Server(envConfig.connectionPort!);

  try {
    await server.init();

    server.start();
  } catch (error) {
    serverError(error);
  }
})();
