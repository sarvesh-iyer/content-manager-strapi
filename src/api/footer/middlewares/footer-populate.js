'use strict';

/**
 * `footer-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In footer-populate middleware.');
		ctx.query.populate = {
			Logo: {
				fields: ["name", "url", "alternativeText"]
			},
			page_links: {
				populate: "*"
			},
			social_links: {
				populate: {
					icon: {
						fields: ["name", "url", "alternativeText"]
					}
				}
			}
		}
		await next();
	};
};
