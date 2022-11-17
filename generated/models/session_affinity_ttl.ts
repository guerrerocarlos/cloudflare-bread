/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Time, in seconds, until this load balancer's session affinity cookie expires after being created. This parameter is ignored unless a supported session affinity policy is set. The current default of 23 hours will be used unless session_affinity_ttl is explicitly set. The accepted range of values is between [1800, 604800]. Once the expiry time has been reached, subsequent requests may get sent to a different origin server.
 */
export type session_affinity_ttl = number;
