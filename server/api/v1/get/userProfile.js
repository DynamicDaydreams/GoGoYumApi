import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';
import { getUserById } from '../../../data/queries/userQueries';

/**
 * @swagger
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
 */
const extract = request => {

    const { userId } = request.user;
    console.log(request.user)
    return { userId };
}

const execute = async (request, params) => {
    const { userId } = params

    var results = await getUserById(userId);
    return prepareResponse(results.userName, results.email, results.id)
}

const prepareResponse = (userName, email, id) => {
    return {
        userName,
        email,
        id
    }
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.SERVER_TOKEN
};