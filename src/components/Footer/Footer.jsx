import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledFooter = styled.footer(
	({ theme: { colors } }) => css`
		padding: 1em 0;

		hr {
			border-color: ${colors.comment};
		}
	`
)

const StyledCopyright = styled.small(
	({ theme: { colors } }) => css`
		color: ${colors.comment};
	`
)

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<StyledFooter>
			<p>Footer</p>
			<hr />
			<StyledCopyright>&copy;{year} - Made with &#9829; by Manuel Lieb</StyledCopyright>
		</StyledFooter>
	)
}

export default Footer
