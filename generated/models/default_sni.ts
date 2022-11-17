/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * If you have legacy TLS clients which do not send the TLS server name indicator, then you can specify one default SNI on the map. If Cloudflare receives a TLS handshake from a client without an SNI, it will respond with the default SNI on those IPs. The default SNI can be any valid zone or subdomain owned by the account.
 */
export type default_sni = string | null;
