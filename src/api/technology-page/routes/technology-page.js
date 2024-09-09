'use strict';

/**
 * technology-page router
 */

// @ts-ignore
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::technology-page.technology-page', {
    config: {
        find: {
            middlewares: ["api::technology-page.technology-page-populate"]
        }
    }
});
