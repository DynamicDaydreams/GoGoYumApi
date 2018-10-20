import crypto from 'crypto';
import Joi from 'joi';

import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';
import { addUser, getUser } from '../../../data/queries/userQueries';
import { createToken } from '../../../utils/authUtils';


/**
 * @swagger
 * definitions:
 *   loginResults:
 *     properties:
 *       userName:
 *         type: string
 *       id: 
 *         type: string
 * 
 * /api/v1/register:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Used to register for authentication. 
 *     produces:
 *       - application/json
 *     parameters: 
 *       - $ref: '#/parameters/ClientBearerToken'
 *       - in: body
 *         name: data
 *         required: true
 *         schema: 
 *            type: string
 *            example: { 
 *              "userName": "swagger", 
 *              "password": "swagger"
 *            }
 *     responses:
 *       200:
 *         description: Basic user information
 *         schema:
 *          $ref: '#/definitions/loginResults'
 */
const extract = request => {
    let validationResults = Joi.validate(request.body, bodySchema);

    if (validationResults.error) {
        throw new Error(validationResults.error);
    }

    let { userName, password } = request.body;

    const hash = crypto.createHash('sha256');
    hash.update(password);
    password = hash.digest('hex')

    return { userName, password };
}

const bodySchema = {
    userName: Joi.string().required(),
    password: Joi.string().required()
}

const execute = async (request, params) => {
    let { userName, password } = params;

    await addUser({ userName, passwordHash: password });

    var user = await getUser(userName, password);

    if (!user) {
        throw new Error('User failed to add');
    }

    return prepareResults(userName, user._id);
}

const prepareResults = (userName, id) => {
    return {
        userName,
        id
    }
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.CLIENT_TOKEN
};