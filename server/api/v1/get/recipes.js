import authTypes from '../../../constants/authTypes';
import regularHandler from '../../../utils/requestHandler';
import { getRecipes } from '../../../data/queries/recipeQueries';

/**
 * @swagger
 * /api/v1/recipes:
 *   get:
 *     tags:
 *       - API
 *     description: Returns a list of recipes
 *     produces:
 *       - application/json
 *     security: 
 *       - ServerBearerAuth: []
 *     responses:
 *       200:
 *         description: List of recipes
 */
const extract = request => {
    return {};
}

const execute = async (request, params) => {
    var results = await getRecipes();
    return prepareResponse(results)
}

const prepareResponse = (recipes) => {
    return { recipes }
}

export default {
    handler: regularHandler(extract, execute),
    authScheme: authTypes.SERVER_TOKEN
};