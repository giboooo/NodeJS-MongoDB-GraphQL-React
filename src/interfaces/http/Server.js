const Koa = require('koa')

class Server {
  constructor({ config, router, logger }) {
    this.config = config
    this.logger = logger
    this.app = new Koa()

    // disable ??!! ('x-powered-by') ?? app.keys
    this.app.use(router)
  }

  start() {
    
  }
}


module.exports = Server




///////////////////////////////////////////////////////
const express = require('express');

class Server {
  constructor({ config, router, logger }) {
    this.config = config;
    this.logger = logger;
    this.express = express();

    this.express.disable('x-powered-by'); /////////////// GRIP in Koa ???!!!
    this.express.use(router);
  }

  start() {
    return new Promise((resolve) => {
      const http = this.express
        .listen(this.config.web.port, () => {
          const { port } = http.address();
          this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
          resolve();
        });
    });
  }
}

module.exports = Server;