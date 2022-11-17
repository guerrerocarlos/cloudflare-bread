/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type automatic_platform_optimization = {
    /**
     * Indicates whether or not [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/) is enabled.
     */
    cache_by_device_type: boolean;
    /**
     * Indicates whether or not Cloudflare proxy is enabled.
     */
    cf: boolean;
    /**
     * Indicates whether or not Automatic Platform Optimization is enabled.
     */
    enabled: boolean;
    /**
     * An array of hostnames where Automatic Platform Optimization for WordPress is activated.
     */
    hostnames: Array<string>;
    /**
     * Indicates whether or not site is powered by WordPress.
     */
    wordpress: boolean;
    /**
     * Indicates whether or not [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is installed.
     */
    wp_plugin: boolean;
};

