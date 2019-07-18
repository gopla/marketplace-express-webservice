const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: 'REST API for item', // Title of the documentation
        version: '1.0.0', // Version of the app
        description: 'This is the REST API for Marketplace', // short description of the app
    },
    host: `marketplace-express.herokuapp.com`, // the host or url of the app
    basePath: '/', // the basepath of your endpoint
}

// options for the swagger docs
const options = {
    // import swaggerDefinitions
    swaggerDefinition,
    // path to the API docs
    apis: ['./docs/*.yaml'],
}
module.exports = swaggerJSDoc(options)
