import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { em } from 'polished'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io'
import Stack from '../../core/helpers/Stack'

const StyledList = styled(Stack)`
	list-style: none;
	padding-left: 0;
	margin: 0;
`

const StyledLink = styled.a(
	({ theme: { colors } }) => css`
		display: inline-flex;
		align-items: center;
		text-decoration: none;

		&:hover,
		&:focus {
			color: ${colors.cyan};
		}

		svg {
			font-size: 120%;
			padding-right: ${em(5)};
		}
	`
)

const SocialLinks = () => (
	<StyledList component="ul" space={10}>
		<StyledLink href="https://github.com/unterweltler" target="_blank" rel="noopener">
			<IoLogoGithub />
			Github
		</StyledLink>
		<StyledLink href="https://twitter.com/seniorpxl" target="_blank" rel="noopener">
			<IoLogoTwitter />
			Twitter
		</StyledLink>
		<StyledLink href="www.linkedin.com/in/manuel-lieb" target="_blank" rel="noopener">
			<IoLogoLinkedin />
			Linkedin
		</StyledLink>
	</StyledList>
)

export default SocialLinks
