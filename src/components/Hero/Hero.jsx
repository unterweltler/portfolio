import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../../core/helpers/linkResolver'

const StyledHero = styled.div`
	grid-column: 3 / 4;
`

const StyledTitle = styled.h1(
	({ theme: { colors, mixins } }) => css`
		color: ${colors.foreground};
		${mixins.fluidStyle('font-size', { min: 24, max: 38 })};

		&:before,
		&:after {
			display: none;
		}
	`
)

const StyledText = styled.div(
	({ theme: { mixins } }) => css`
		${mixins.fluidStyle('font-size', { min: 16, max: 20 })};
	`
)

const Hero = ({ title, text }) => (
	<StyledHero>
		<StyledTitle>{RichText.asText(title)}</StyledTitle>
		<StyledText>
			<RichText render={text} linkResolver={linkResolver} />
		</StyledText>
	</StyledHero>
)

export default Hero
