const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'File System Management',
      version: '1.0.0',
      description: 'Upload Any file',
    },
    servers: [
      {
        url: 'http://localhost:8080', 
      },
    ],
  },
  apis: ['./route/v1/*'], 
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
