/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Specify the region where your private key can be held locally for optimal TLS performance. HTTPS connections to any excluded data center will still be fully encrypted, but will incur some latency while Keyless SSL is used to complete the handshake with the nearest allowed data center. Options allow distribution to only to U.S. data centers, only to E.U. data centers, or only to highest security data centers. Default distribution is to all Cloudflare datacenters, for optimal performance.
 */
export type geo_restrictions = {
    label?: 'us' | 'eu' | 'highest_security';
};

