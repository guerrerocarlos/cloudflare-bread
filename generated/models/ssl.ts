/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { schemas_base } from './schemas_base';

/**
 * SSL encrypts your visitor's connection and safeguards credit card numbers and other personal data to and from your website. SSL can take up to 5 minutes to fully activate. Requires Cloudflare active on your root domain or www domain. Off: no SSL between the visitor and Cloudflare, and no SSL between Cloudflare and your web server  (all HTTP traffic). Flexible: SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, but no SSL between Cloudflare and your web server. You don't need to have an SSL cert on your web server, but your vistors will still see the site as being HTTPS enabled. Full:  SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and your web server. You'll need to have your own SSL cert or self-signed cert at the very least. Full (Strict): SSL between the visitor and Cloudflare -- visitor sees HTTPS on your site, and SSL between Cloudflare and your web server. You'll need to have a valid SSL certificate installed on your web server. This certificate must be signed by a certificate authority, have an expiration date in the future, and respond for the request domain name (hostname). (https://support.cloudflare.com/hc/en-us/articles/200170416).
 */
export type ssl = schemas_base;

