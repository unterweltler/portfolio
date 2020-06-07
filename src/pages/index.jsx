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
			<ProjectList title="Latest Projects" projects={projects} showMoreLink variant="home" />
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
						image
						imageSharp {
							childImageSharp {
								fluid(traceSVG: { background: "#f8f8f2", color: "#282a36" }) {
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
