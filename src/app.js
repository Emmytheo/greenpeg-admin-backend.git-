const path = require('path')
const favicon = require('serve-favicon')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const logger = require('./logger')

const feathers = require('@feathersjs/feathers')
const configuration = require('@feathersjs/configuration')
const express = require('@feathersjs/express')
const socketio = require('@feathersjs/socketio')
const swagger = require('feathers-swagger');

const middleware = require('./middleware')
const services = require('./services')
const appHooks = require('./app.hooks')
const channels = require('./channels')

const authentication = require('./authentication')

const mongodb = require('./mongodb')

const app = express(feathers())

// Load app configuration
app.configure(configuration())
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
// Host the public folder
app.use('/', express.static(app.get('public')))

// Set up Plugins and providers
app.configure(express.rest())
app.configure(swagger({
  docsPath: '/docs',
  uiIndex: path.join(__dirname, 'docs.html'),
  security: [
    {
     APIKeyHeader: []
    }
  ],
  securityDefinitions: {
    APIKeyHeader: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
 },
  schemes: ['http', 'https'],
  specs: {
    info: {
      title: 'Greenpeg API Docs',
      description: 'A swagger based test bed for exploring the Greenpeg API',
      version: '1.0.0',
    },
    // schemes: ['http', 'https'] // Optionally set the protocol schema used (sometimes required when host on https)
  },
  idType: 'string',
  // ignore: {
  //   tags: [
  //   ],
    
  // }
  

}));
app.configure(socketio())

app.configure(mongodb)

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware)
app.configure(authentication)
// Set up our services (see `services/index.js`)
app.configure(services)
// Set up event channels (see channels.js)
app.configure(channels)

// Configure a middleware for 404s and the error handler
app.use(express.notFound())
app.use(express.errorHandler({ logger }))

app.hooks(appHooks)

module.exports = app
