import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../core/helpers/Layout'
import ProjectList from '../components/ProjectList'
import LinkBlock from '../components/LinkBlock'

export default ({ data }) => {
	const projects = data.prismic.allProjects.edges

	return (
		<Layout title="Project List">
			<LinkBlock back={{ to: '/', text: 'Back' }} />
			<ProjectList title="Project List" projects={projects} showBackLink />
		</Layout>
	)
}

export const query = graphql`
	{
		prismic {
			allProjects(sortBy: date_DESC) {
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
