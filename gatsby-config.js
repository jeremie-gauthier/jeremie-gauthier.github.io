const customQueries = {
	mobile: "(max-width: 575px)",
	default: "(min-width: 576px)",
};

module.exports = {
	siteMetadata: {
		title: `Jeremie GAUTHIER - FullStack Developer`,
		description: `Jeremie GAUTHIER's portfolio. FullStack Developer Freelance. Currently studying at 42 Paris.`,
		author: `jergauth`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: "Jeremie GAUTHIER - Portfolio",
				short_name: "jergauth",
				start_url: "/",
				background_color: "#090770",
				theme_color: "#0d1e5b",
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: "standalone",
				icon: "src/assets/favicon.png",
				icons: [
					{
						src: `/favicons/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/favicons/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				workboxConfig: {
					globPatterns: ["**/*"],
				},
			},
		},
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
		{
			resolve: `gatsby-plugin-breakpoints`,
			options: {
				queries: customQueries,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
	],
};
