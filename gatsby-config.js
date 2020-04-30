/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: `Frontend Developer`,
		titleTemplate: '%s - Manuel Lieb',
		url: `https://www.pixelschubser.ch`,
		description: `Portfolio Page of Manuel Lieb - Senior Frontend Developer`,
	},
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-fonts-v2`,
			options: {
				fonts: [
					{
						family: 'Fira Code',
						variable: true,
						weights: ['300..700'],
					},
				],
			},
		},
		{
			resolve: 'gatsby-source-prismic-graphql',
			options: {
				repositoryName: 'pixelschubser',
				accessToken: `${process.env.API_KEY}`,
				path: '/preview',
				previews: true,
				// pages: [
				// 	{
				// 		type: 'Article', // TypeName from prismic
				// 		match: '/article/:uid', // Pages will be generated under this pattern
				// 		path: '/article', // Placeholder page for unpublished documents
				// 		component: require.resolve('./src/templates/article.js'),
				// 	},
				// ],
			},
		},
	],
}
