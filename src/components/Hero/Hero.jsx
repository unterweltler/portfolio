import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledTitle = styled.h1(
	({ theme: { colors, mixins } }) => css`
		margin-top: 0;
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

const Hero = () => (
	<div>
		<StyledTitle>Hey, I'm Manuel!</StyledTitle>
		<StyledText>
			<p>I'm a Senior Frontend Developer with a crush on React, CSS-in-JS and Headless Websites.</p>
			<p>
				I work at Unic in Zurich - where I take beautiful Designs and turn them into performant, responsive and
				beautiful Webapps.
				<br />
				In my free-time I enjoy exploring the Swiss-Mountains, SUP (Stand Up Paddling) or tinkering with 3D Printers.
			</p>
		</StyledText>
	</div>
)

export default Hero
