/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * When true, only the uncached traffic served from your origin servers will count towards rate limiting. In this case, any cached traffic served by Cloudflare will not count towards rate limiting. This field is optional.
 * Notes: This field is deprecated. Instead, use response headers and set "origin_traffic" to "false" to avoid legacy behaviour interacting with the "response_headers" property.
 */
export type origin_traffic = boolean;
