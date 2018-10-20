import express from 'express';
import { addHandlers } from '../utils/routerUtils';
import routes from './v1/routes';

/**
 * @swagger
 * 
 * parameters:
 *   ClientBearerToken:
 *     in: header
 *     name: Authorization
 *     description: Client Bearer Token
 *     type: string
 *     default: Bearer ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKamJHbGxiblFpTENKaGRXUWlPaUprWldaaGRXeDBaVzF3YkdGMFpXRndjQ0o5Lmk0RUtvb3ZORGMwTXlXTGFKMEFBVXBVQWdTa3hOVlV2STRXVFhuNUEyZDg=
 *     required: true
 */


const router = express.Router();

addHandlers(router, 'get', routes.getRoutes);
addHandlers(router, 'post', routes.postRoutes);
addHandlers(router, 'put', routes.putRoutes);
addHandlers(router, 'delete', routes.deleteRoutes);

export default router;