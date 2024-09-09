'use strict';

/**
 * header router
 */

// @ts-ignore
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::header.header', {
    config: {
        find: {
            middlewares: ["api::header.header-populate"],
        }
    },
});
