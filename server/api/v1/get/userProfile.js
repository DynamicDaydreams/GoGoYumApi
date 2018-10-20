import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';
import { getUserById } from '../../../data/queries/userQueries';

/**
 * @swagger
 * definitions:
 *   userProfileResults:
 *     properties:
 *       userName:
 *         type: string
 *       id:
 *         type: string
 * 
 * /api/v1/user/profile:
 *   get:
 *     tags:
 *       - API
 *     description: Returns the current user profile
 *     produces:
 *       - application/json
 *     security: 
 *       - ServerBearerAuth: []
 *     responses:
 *       200:
 *         description: User profile information
 *         schema:
 *          $ref: '#/definitions/heartbeatResults'
 */
const extract = request => {

    const { userId } = request.user;
    console.log(request.user)
    return { userId };
}

const execute = async (request, params) => {
    const { userId } = params



    var results = await getUserById(userId);
    return prepareResponse(results.userName, results.id)
}

const prepareResponse = (userName, id) => {
    return {
        userName,
        id
    }
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.SERVER_TOKEN
};