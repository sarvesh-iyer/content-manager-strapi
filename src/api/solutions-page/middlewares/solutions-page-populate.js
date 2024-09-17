'use strict';

/**
 * `solutions-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In solutions-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					Image: {
						fields: ["url", "name", "alternativeText"]
					},
					List: {
						populate: "*"
					},
					Buttons: {
						populate: "*"
					}
				}
			}
		}
		await next();
	};
};
