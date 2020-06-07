import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rem, em } from 'polished'
import { RichText } from 'prismic-reactjs'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { linkResolver } from '../../core/helpers/linkResolver'
import Button from '../Button'

const StyledWrapper = styled.div`
	grid-column: 2 / 5;
`

const StyledList = styled.div(
	({ theme: { mixins }, isHomeVariant }) => css`
		display: grid;
		gap: 1rem;
		${mixins.responsiveStyles({ 'grid-template-columns': { small: 'repeat(auto-fill, minmax(320px, 1fr))' } })};

		${isHomeVariant &&
		css`
			${StyledCard} {
				&:last-of-type {
					${mixins.responsiveStyles({ display: { zero: 'none', large: 'block' } })}
				}
			}
		`}
	`
)

const StyledCard = styled.div(
	({ theme: { animations, colors } }) => css`
		position: relative;
		border: ${rem(2)} solid ${colors.comment};
		transition: border-color ${animations.duration}s ${animations.timingFunc};

		&:hover {
			border-color: ${colors.yellow};

			${StyledTitle} {
				border-color: ${colors.yellow};
				color: ${colors.yellow};
			}

			${StyledImage} {
				transform: scale(1.1);
				transition: transform ${animations.durationKenBurns}s ${animations.timingFunc} 1s;
			}
		}
	`
)

const StyledImageWrapper = styled.div`
	overflow: hidden;
`

const StyledImage = styled(Img)(
	({ theme: { animations } }) => css`
		// reset transition time 10% of the durationKenBurns
		transition: transform ${animations.durationKenBurns * 0.1}s ${animations.timingFunc};
	`
)

const StyledTitle = styled.span(
	({ theme: { animations, colors, mixins } }) => css`
		position: absolute;
		left: ${rem(-2)};
		bottom: ${rem(-2)};
		z-index: 0;
		max-width: 75%;
		padding: ${em(5)} ${em(10)} 0 0;
		border: ${rem(2)} solid ${colors.comment};
		${mixins.fluidStyle('font-size', { min: 16, max: 18 })};
		color: ${colors.foreground};
		transition: all ${animations.duration}s ${animations.timingFunc};

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: ${rem(-2)};
			right: 0;
			bottom: ${rem(-2)};
			background: ${colors.background};
			z-index: -1;
		}
	`
)

const StyledLinkWrapper = styled(StyledList)`
	padding-top: 1rem;
`

const StyledButton = styled(Button)`
	grid-column-end: -1;
`

const ProjectCard = ({
	project: {
		node: { _meta, title, imageSharp },
	},
}) => {
	return (
		<StyledCard>
			<Link to={linkResolver(_meta)}>
				<StyledImageWrapper>
					<StyledImage fluid={imageSharp.childImageSharp.fluid} loading="lazy" />
				</StyledImageWrapper>
				<StyledTitle>{RichText.asText(title)}</StyledTitle>
			</Link>
		</StyledCard>
	)
}

const ProjectList = ({ title, projects, showMoreLink, variant }) => {
	const isHomeVariant = variant === 'home'

	return projects ? (
		<StyledWrapper>
			{title && <h2>{title}</h2>}
			<StyledList isHomeVariant={isHomeVariant}>
				{projects.map(project => (
					<ProjectCard key={project.node._meta.uid} project={project} />
				))}
			</StyledList>
			{showMoreLink && (
				<StyledLinkWrapper topSpace>
					<StyledButton to="/projects">
						<span>See more Projects</span>
						<IoMdArrowRoundForward />
					</StyledButton>
				</StyledLinkWrapper>
			)}
		</StyledWrapper>
	) : null
}

export default ProjectList
