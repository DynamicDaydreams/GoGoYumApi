import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';

/**
 * @swagger
 * /api/v1/heartbeat:
 *   get:
 *     tags:
 *       - Health
 *     description: Returns status and server time
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of puppies
 */
const extract = request => {
    return {};
}

const execute = async (request, params) => {
    return { status: 'Okay', serverTime: new Date() };
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.ANONYMOUS
};