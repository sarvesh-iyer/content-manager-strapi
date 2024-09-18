'use strict';

/**
 * `career-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In career-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					action_button: {
						populate: "*"
					},
					inputs: {
						populate: "*"
					},
					Image: {
						fields: ["url", "name", "alternativeText"]
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
