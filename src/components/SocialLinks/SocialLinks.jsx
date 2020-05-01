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
		display: flex;
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
		<StyledLink href="https://github.com/unterweltler">
			<IoLogoGithub />
			Github
		</StyledLink>
		<StyledLink href="https://twitter.com/seniorpxl">
			<IoLogoTwitter />
			Twitter
		</StyledLink>
		<StyledLink href="www.linkedin.com/in/manuel-lieb">
			<IoLogoLinkedin />
			Linkedin
		</StyledLink>
	</StyledList>
)

export default SocialLinks
