import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, pathname }) => (
	<StaticQuery
		query={`${query}`}
		render={({
			site: {
				siteMetadata: { defaultTitle, titleTemplate, defaultDescription, siteUrl },
			},
		}) => {
			const seo = {
				title: title || defaultTitle,
				description: description || defaultDescription,
				url: `${siteUrl}${pathname || '/'}`,
			}

			return (
				<Helmet title={seo.title} titleTemplate={titleTemplate}>
					<meta name="description" content={seo.description} />
					{seo.url && <meta property="og:url" content={seo.url} />}
					{seo.title && <meta property="og:title" content={seo.title} />}
					{seo.description && <meta property="og:description" content={seo.description} />}
				</Helmet>
			)
		}}
	/>
)

export default SEO

const query = graphql`
	{
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
			}
		}
	}
`
