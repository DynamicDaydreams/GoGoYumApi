import passport from 'passport';
import HttpStatus from 'http-status-codes';
import authTypes from '../constants/authTypes';
import { authUtils } from './authUtils';

const addHandler = (router, path, method, config) => {
    const { authScheme, handler } = config;
    if (authScheme) {
        router.route(path)[method](authUtils.authenticate(authScheme, { session: false }), (request, response) => {
            try {
                handler.handle(request, response).then(function (results) {
                    console.log(results);
                    response.send(results);
                }).catch(function (error) {
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: error.message });
                });
            } catch (error) {
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: error.message });
            }
        });
    }
    else {
        router.route(path)[method]((request, response) => {
            try {
                handler.handle(request, response).then(function (results) {
                    response.send(results);
                }).catch(function (error) {
                    response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: error.message });
                });
            } catch (error) {
                response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: error.message });
            }
        });
    }
}

const addHandlers = (router, method, routeConfigs) => {
    for (var path in routeConfigs) {
        addHandler(router, path, method, routeConfigs[path]);
    }
}

export { addHandler, addHandlers }