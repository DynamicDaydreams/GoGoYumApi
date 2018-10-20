import { authUtils } from './authUtils';
import { exec } from 'child_process';

const regularHandler = (extract, execute) => {
    const handle = async (request, response) => {
        let params;

        if (extract && typeof extract === "function") {
            params = await extract(request);
        }

        let executeResults;
        if (execute && typeof execute === "function") {
            executeResults = await execute(request, params);
        }

        return executeResults;
    }

    return { handle }
}

export default regularHandler;