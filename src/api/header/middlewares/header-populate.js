'use strict';

/**
 * `header-populate` middleware
 */

const populate = {
	Logo: {
		fields: ["url", "name", "alternativeText"]
	},
	Buttons: {
		populate: "*"
	},
	nav_links: {
		populate: "*"
	}
}

module.exports = (config, { strapi }) => {
	// Add your own logic here.
	return async (ctx, next) => {
		strapi.log.info('In header-populate middleware.');
		ctx.query.populate = populate
		await next();
	};
};
