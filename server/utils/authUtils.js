import passport from 'passport';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { Strategy as AnonymousStrategy } from 'passport-anonymous';
import jwt from 'jsonwebtoken';

import config from '../config'
import authTypes from '../constants/authTypes'

const verifyServerToken = new BearerStrategy((token, callback) => {
    try {
        token = Buffer.from(token, 'base64').toString();
        const decodedToken = jwt.verify(token, config.jwt.issuers.server.publicKey);
        return callback(null, decodedToken);
    }
    catch (error) {
        console.log(`Invalid token: ${error.message}`);
        return callback(null, false, error.message)
    }
});

const verifyClientToken = new BearerStrategy((token, callback) => {
    try {
        token = Buffer.from(token, 'base64').toString();
        const decodedToken = jwt.verify(token, config.jwt.issuers.client.publicKey);
        return callback(null, decodedToken);
    }
    catch (error) {
        console.log(`Invalid token: ${error.message}`);
        return callback(null, false, error.message)
    }
});

const preparePassport = (() => {
    passport.use(authTypes.CLIENT_TOKEN, verifyClientToken);
    passport.use(authTypes.SERVER_TOKEN, verifyServerToken);
    passport.use(authTypes.ANONYMOUS, new AnonymousStrategy());
})();

const createToken = (payload) => {
    const jwtToken = jwt.sign(payload, config.jwt.issuers.server.publicKey, {
        audience: config.environmentName,
        issuer: 'server'
    });

    return Buffer.from(jwtToken).toString('base64');
}

export { passport as authUtils, createToken }