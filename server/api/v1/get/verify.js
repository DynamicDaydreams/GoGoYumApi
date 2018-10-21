import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';
import { getUserById } from '../../../data/queries/userQueries';

/**
 * @swagger
 * definitions:
 *   verifyResults:
 *     properties:
 *       valid:
 *         type: boolean
 * 
 * /api/v1/verify:
 *   get:
 *     tags:
 *       - API
 *     description: Returns a boolean determining if token is valid
 *     produces:
 *       - application/json
 *     security: 
 *       - ServerBearerAuth: []
 *     responses:
 *       200:
 *         description: A boolean that says the token is valid
 *         schema:
 *          $ref: '#/definitions/verifyResults'
 */
const extract = request => {
    return {};
}

const execute = async (request, params) => {
    return prepareResponse()
}

const prepareResponse = () => {
    return {
        valid: true
    }
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.SERVER_TOKEN
};