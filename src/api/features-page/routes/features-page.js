'use strict';

/**
 * features-page router
 */

// @ts-ignore
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::features-page.features-page', {
    config: {
        find: {
            middlewares: ["api::features-page.feature-page-populate"],
        },
        findOne: {
            middlewares: ["api::features-page.feature-page-populate"],
        }
    },
});
