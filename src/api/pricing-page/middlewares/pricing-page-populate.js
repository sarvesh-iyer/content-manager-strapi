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
					},
					action_button: {
						populate: "*"
					},
					list: {
						populate: "*"
					},
					question_answers: {
						populate: "*"
					},
					credits_calculations: {
						populate: "*"
					},
					icon: {
						populate: {
							fields: ["name", "url", "alternativeText"]
						}
					}
				}
			},
			subscription_plans: {
				populate: "*"
			},
			all_subscription_plans: {
				populate: "*"
			},
			plan_features: {
				populate: "*"
			},
			subscription_period: {
				populate: "*"
			},
			plan_service_group: {
				populate: "*"
			},
			icon: {
				fields: ["name", "url", "alternativeText"]
			}
		}
		await next();
	};
};
