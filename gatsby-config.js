const path = require(`path`);

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
	],
};
