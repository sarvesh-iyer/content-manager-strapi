'use strict';

/**
 * localization-language router
 */

// @ts-ignore
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::localization-language.localization-language', {
    config: {
        find: {
            middlewares: ["api::localization-language.localization-language-populate"],
        }
    },
});
