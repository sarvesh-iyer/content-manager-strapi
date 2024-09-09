'use strict';

/**
 * localization-language service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::localization-language.localization-language');
