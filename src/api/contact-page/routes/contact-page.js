'use strict';

/**
 * contact-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::contact-page.contact-page', {
    config: {
        find: {
            middlewares: ['api::contact-page.contact-page-populate']
        }
    }
});
