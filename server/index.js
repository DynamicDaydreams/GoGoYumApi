import './polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerTools from 'swagger-tools';

import config from './config';
import api from './api';

const app = express();

// add cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Configure swagger
const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: "API - " + config.environmentName,
            version: "1.0.0"
        },
        securityDefinitions: {
            ServerBearerAuth: {
                type: 'apiKey',
                description: 'Server Generated Token (Add Bearer in front of token!)',
                name: 'Authorization',
                in: 'header'
            }
        },
    },
    apis: [__dirname + '/api/**/*.js']
})

swaggerTools.initializeMiddleware(swaggerSpec, middleware => {
    app.use(middleware.swaggerUi());
});

app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`gogoyum is started and listening to port ${port}`);