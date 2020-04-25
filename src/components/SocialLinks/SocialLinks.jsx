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
			padding-right: ${em(5)};
		}
	`
)

const SocialLinks = () => (
	<StyledList component="ul" space={10}>
		<StyledLink href="#github">
			<IoLogoGithub />
			Github
		</StyledLink>
		<StyledLink href="#twitter">
			<IoLogoTwitter />
			Twitter
		</StyledLink>
		<StyledLink href="#linkedin">
			<IoLogoLinkedin />
			Linkedin
		</StyledLink>
	</StyledList>
)

export default SocialLinks
