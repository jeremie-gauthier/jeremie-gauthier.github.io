const path = require("path");
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	plugins: [
		{
			resolve: "gatsby-plugin-html-attributes",
			options: {
				lang: "fr",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
	],
};
