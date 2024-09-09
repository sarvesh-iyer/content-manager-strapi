'use strict';

/**
 * footer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::footer.footer', {
    config: {
        find: {
            middlewares: ["api::footer.footer-populate"],
        },
        findOne: {
            middlewares: ["api::footer.footer-populate"],
        }
    },
});
