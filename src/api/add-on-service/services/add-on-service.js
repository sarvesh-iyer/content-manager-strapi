'use strict';

/**
 * add-on-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::add-on-service.add-on-service');
