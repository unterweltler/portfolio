import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { em } from 'polished'
import SocialLinks from '../SocialLinks'

const StyledFooter = styled.footer(
	({ theme: { colors } }) => css`
		padding-bottom: 1em;

		hr {
			border-color: ${colors.comment};
		}
	`
)

const StyledFooterMeta = styled.div`
	padding-top: ${em(20)};
`

const StyledCopyright = styled.small(
	({ theme: { colors } }) => css`
		color: ${colors.comment};
	`
)

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<StyledFooter>
			<h3>Follow</h3>
			<SocialLinks />
			<StyledFooterMeta>
				<hr />
				<StyledCopyright>&copy;{year} - Made with &#9829; by me (Manuel Lieb)</StyledCopyright>
			</StyledFooterMeta>
		</StyledFooter>
	)
}

export default Footer
