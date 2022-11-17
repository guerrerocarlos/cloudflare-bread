/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The session_affinity specifies the type of session affinity the load balancer should use unless specified as "none" or ""(default). The supported types are "cookie" and "ip_cookie". "cookie" - On the first request to a proxied load balancer, a cookie is generated, encoding information of which origin the request will be forwarded to. Subsequent requests, by the same client to the same load balancer, will be sent to the origin server the cookie encodes, for the duration of the cookie and as long as the origin server remains healthy. If the cookie has expired or the origin server is unhealthy then a new origin server is calculated and used. "ip_cookie" behaves the same as "cookie" except the initial origin selection is stable and based on the client’s ip address.
 */
export type session_affinity = 'none' | 'cookie' | 'ip_cookie' | '""';
