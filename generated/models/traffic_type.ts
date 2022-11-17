/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Determines how data travels from the edge to your origin. When set to "direct", Spectrum will send traffic directly to your origin, and the application's type is derived from the `protocol`. When set to "http" or "https", Spectrum will apply Cloudflare's HTTP/HTTPS features as it sends traffic to your origin, and the application type matches this property exactly.
 */
export type traffic_type = 'direct' | 'http' | 'https';
