'use strict';

/**
 * trusted-company service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trusted-company.trusted-company');
