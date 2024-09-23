'use strict';

/**
 * add-on-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::add-on-service.add-on-service');
