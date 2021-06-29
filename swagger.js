const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "Api de manipulação de Produtos.",
        description: "Essa Api de tem como objectivo a manipulação de objetos."
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './src/swagger.json'
const endpointsFiles = ['./src/server.ts']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/index')           // Your project's root file
})