process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

// Initialize Koop
const Koop = require('koop')
const koop = new Koop()

const provider = require('./provider');
koop.register(provider);

if (process.env.DEPLOY === 'export') {
    module.exports = koop.server
  } else { 
       // Start listening for HTTP traffic
        const config = require('config')
        // Set port for configuration or fall back to default
        const port = config.port || 8080
        koop.server.listen(port)
  }

