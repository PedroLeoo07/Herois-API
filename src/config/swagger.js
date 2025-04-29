const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Heróis',
            version: '1.0.0',
            description: 'Documentação da API de Heróis',
        },
    },
    apis: ['./src/routes/*.js'], // Caminho para os arquivos de rota
}

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
    try {
        app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    } catch (error) {
        console.error("Erro ao configurar o Swagger", error)
    }
    
}

module.exports = setupSwagger