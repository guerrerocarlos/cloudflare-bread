/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';

export type tunnel_response_single = (api_response_single & {
    result?: Record<string, any>;
});

