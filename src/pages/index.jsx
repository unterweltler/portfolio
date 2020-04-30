import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../core/helpers/Layout'
import Hero from '../components/Hero'

export default ({ data }) => {
	const content = data.prismic.allHomepages.edges.slice(0, 1).pop().node

	return (
		<Layout>
			<Hero title={content.hero_title} text={content.hero_text} />
		</Layout>
	)
}

export const query = graphql`
	{
		prismic {
			allHomepages {
				edges {
					node {
						hero_text
						hero_title
					}
				}
			}
		}
	}
`
