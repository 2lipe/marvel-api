import { Server } from './server';

import { envConfigs } from './Configs/env-configs';
import { serverError } from './Helpers/http-error-helpers';

(async (): Promise<void> => {
  const server = new Server(envConfigs.connectionPort!);

  try {
    await server.init();

    server.start();
  } catch (error) {
    serverError(error);
  }
})();
