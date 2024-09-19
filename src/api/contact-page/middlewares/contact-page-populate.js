'use strict';

/**
 * `contact-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In contact-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					Cards: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"]
							},
							Buttons: {
								populate: "*"
							}
						}
					},
					List: {
						populate: "*"
					},
					Buttons: {
						populate: "*"
					},
				},
			},
			contact_forms: {
				populate: {
					action_button: {
						populate: "*"
					},
					inputs: {
						populate: "*"
					},
					list: {
						populate: "*"
					},
					Image: {
						fields: ["name", "url", "alternativeText"]
					}
				}
			}
		}
		await next();
	};
};
