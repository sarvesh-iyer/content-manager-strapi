'use strict';

/**
 * `technology-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In technology-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					List: {
						populate: "*"
					},
					Image: {
						fields: ["name", "url", "alternativeText"],
					},
					cards: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"],
							},
						}
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
