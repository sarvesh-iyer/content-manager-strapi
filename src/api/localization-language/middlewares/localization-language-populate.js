'use strict';

/**
 * `localization-language-populate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In localization-language-populate middleware.');
    ctx.query.populate = {
      languages: {
        populate: "*"
      }
    }
    await next();
  };
};
