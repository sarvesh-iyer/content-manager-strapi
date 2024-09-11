'use strict';

/**
 * `site-submenu-populate` middleware
 */

const populate = {
	product: {
		populate: {
			feature_cards: {
				populate: {
					Image: {
						fields: ["name", "url", "alternativeText"]
					}
				}
			},
			link: {
				populate: "*"
			}
		}
	},
	solutions: {
		populate: {
			menu: {
				populate: {
					icon: {
						fields: ["name", "url", "alternativeText"]
					}
				}
			},
		}
	}
}

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In site-submenu-populate middleware.');
		ctx.query.populate = populate
		await next();
	};
};
