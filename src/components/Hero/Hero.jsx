import React from 'react'
import styled from '@emotion/styled'
import { em } from 'polished'

const StyledTitle = styled.h1`
	margin-top: 0;
	font-size: ${em(38)};
	font-size: clamp(${em(24)}, 1em + 3vw, ${em(38)});
`

const StyledText = styled.div`
	font-size: ${em(20)};
	font-size: clamp(${em(16)}, 1em + 0.3125vw, ${em(20)});
`

const Hero = () => (
	<div>
		<StyledTitle>Hey, I'm Manuel!</StyledTitle>
		<StyledText>
			<p>
				I'm a Senior Frontend Developer with a crush on React, CSS-in-JS and
				Headless Websites.
			</p>
			<p>
				I work @Unic in Zurich - where I take beautiful Designs and turn them
				into performant, responsive and beautiful Webapps.
				<br />
				In my free-time I enjoy exploring the Swiss-Mountains, SUP (Stand Up
				Paddling) or tinkering with 3D Printers.
			</p>
		</StyledText>
	</div>
)

export default Hero
