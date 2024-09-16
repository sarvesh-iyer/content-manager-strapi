'use strict';

/**
 * `feature-page-populate` middleware
 */

const populate = {
	blocks: {
		populate: {
			Cards: {
				populate: {
					Image: {
						fields: ["name", "url", "alternativeText"],
					},
					Buttons: {
						populate: {
							icon: {
								fields: ["name", "url", "alternativeText"],
							}
						}
					}
				}
			},
			Image: {
				fields: ["name", "url", "alternativeText"],
			},
			List: {
				populate: "*"
			},
			Buttons: {
				populate: "*"
			},
		},
	}
};

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In feature-page-populate middleware.');
		ctx.query = {
			populate,
			...ctx.query
		}
		await next();
	};
};
