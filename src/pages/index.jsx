import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../core/helpers/Layout'
import Hero from '../components/Hero'
import ProjectList from '../components/ProjectList'

export default ({ data }) => {
	const content = data.prismic.allHomepages.edges[0].node
	const projects = data.prismic.allProjects.edges

	return (
		<Layout>
			<Hero title={content.hero_title} text={content.hero_text} />
			<ProjectList title="Latest Projects" projects={projects} showLink variant="home" />
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
			allProjects(sortBy: date_DESC, first: 3) {
				edges {
					node {
						title
						imageSharp {
							childImageSharp {
								fluid(traceSVG: { background: "#50fa7b", color: "#6272a4" }) {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
						_meta {
							uid
							type
						}
					}
				}
			}
		}
	}
`
