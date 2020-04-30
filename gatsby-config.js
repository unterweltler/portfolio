/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	/* Your site config here */
	plugins: [
		`gatsby-plugin-emotion`,
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
