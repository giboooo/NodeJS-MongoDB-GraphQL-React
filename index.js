const container = require('src/container') // Dependency Injection (awilix)

const app = container.resolve('app')

app.start()
app.catch((error) => {
  app.logger.error(error.stack)
  process.exit()
})


/**
 * https://blog.risingstack.com/dependency-injection-in-node-js/
 * 
 * Dependency injection is a software design pattern in which one or more dependencies (or services) are injected, or passed by reference, into a dependent object.
 */