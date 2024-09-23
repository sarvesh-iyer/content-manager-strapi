'use strict';

/**
 * pricing-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pricing-page.pricing-page', {
    config: {
        find: {
            middlewares: ['api::pricing-page.pricing-page-populate']
        }
    }
});
