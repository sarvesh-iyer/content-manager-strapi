'use strict';

/**
 * `home-page-populate` middleware
 */

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In home-page-populate middleware.');
		ctx.query.populate = {
			blocks: {
				populate: {
					Buttons: {
						populate: "*"
					},
					companies: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"],
							}
						}
					},
					content_with_img: {
						populate: {
							List: {
								populate: "*"
							},
							Image: {
								fields: ["name", "url", "alternativeText"],
							},
							Buttons: {
								populate: "*"
							}
						}
					},
					List: {
						populate: "*"
					},
					Image: {
						fields: ["name", "url", "alternativeText"],
					},
					Cards: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"],
							},
							Buttons: {
								populate: "*"
							}
						}
					},
					Images: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"],
							},
						}
					},
					trusted_companies: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"],
							},
						}
					},
					featured_ins: {
						populate: {
							Image: {
								fields: ["name", "url", "alternativeText"],
							},
						}
					},
				}
			}
		}
		await next();
	};
};
