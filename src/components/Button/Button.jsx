import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { em } from 'polished'
import { Link } from 'gatsby'

const StyledLink = styled(Link)(
	({ theme: { colors } }) => css`
		display: inline-block;
		padding: ${em(10)} ${em(20)};
		background: ${colors.green};
		border: 2px solid ${colors.green};
		text-decoration: none;
		color: ${colors.background};

		&:hover,
		&:focus {
			background: ${colors.background};
			color: ${colors.green};
		}
	`
)

const Button = ({ to, className, children }) => {
	return (
		<StyledLink to={to} className={className}>
			{children}
		</StyledLink>
	)
}

export default Button
