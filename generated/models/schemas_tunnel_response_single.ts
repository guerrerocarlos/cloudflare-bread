/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { api_response_single } from './api_response_single';
import type { tunnel } from './tunnel';

export type schemas_tunnel_response_single = (api_response_single & {
    result?: tunnel;
});

