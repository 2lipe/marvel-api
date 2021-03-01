const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/Api/Routes/Routes.ts'];

swaggerAutogen(outputFile, endpointsFiles);
