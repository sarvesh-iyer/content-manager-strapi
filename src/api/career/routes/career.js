'use strict';

/**
 * career router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::career.career', {
    config: {
        find: {
            middlewares: ['api::career.career-page-populate']
        }
    }
});
