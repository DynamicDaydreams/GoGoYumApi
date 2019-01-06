import get_userProfile from './get/userProfile';
import get_heartbeat from './get/heartbeat';
import get_verify from './get/verify';
import get_recipes from './get/recipes';

import post_login from './post/login';
import post_register from './post/register';

const routes = {
    getRoutes: {
        '/v1/heartbeat': get_heartbeat,
        '/v1/user/profile': get_userProfile,
        '/v1/verify': get_verify,
        '/v1/recipes': get_recipes
    },

    postRoutes: {
        '/v1/login': post_login,
        '/v1/register': post_register
    },

    putRoutes: {
        // '/path/of/route': handler
    },

    deleteRoutes: {
        // '/path/of/route': handler
    }
}

export default routes;