'use strict';

/**
 * site-submenu router
 */

// @ts-ignore
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::site-submenu.site-submenu', {
    config: {
        find: {
            middlewares: ["api::site-submenu.site-submenu-populate"]
        }
    }
});
