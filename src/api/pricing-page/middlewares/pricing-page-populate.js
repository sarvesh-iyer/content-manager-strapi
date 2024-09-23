'use strict';

/**
 * `pricing-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In pricing-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					cards: {
						populate: "*"
					},
					Buttons: {
						populate: "*"
					},
					List: {
						populate: "*"
					},
					add_on_services: {
						populate: "*"
					}
				}
			},
			plan_cards: {
				populate: {
					action_button: {
						populate: "*"
					},
					icon: {
						fields: ["name", "url", "alternativeText"]
					},
					plan_services: {
						populate: "*"
					}
				}
			},
			icon: {
				fields: ["name", "url", "alternativeText"]
			}
		}
		await next();
	};
};
