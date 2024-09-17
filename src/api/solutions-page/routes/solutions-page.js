'use strict';

/**
 * solutions-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::solutions-page.solutions-page', {
    config: {
        find: {
            middlewares: ['api::solutions-page.solutions-page-populate']
        },
        findOne: {
            middlewares: ['api::solutions-page.solutions-page-populate']
        }
    }
});
