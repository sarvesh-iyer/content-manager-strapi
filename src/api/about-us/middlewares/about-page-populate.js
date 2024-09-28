'use strict';

/**
 * `about-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In about-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					Buttons: {
						populate: "*"
					},
					Image: {
						fields: ["name", "url", "alternativeText"]
					},
					Images: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"]
							},
						}
					},
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
					years: {
						populate: "*"
					},
					cards: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"]
							}
						}
					}
				}
			}
		}
		await next();
	};
};
