import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { em } from 'polished'
import { Link } from 'gatsby'

const StyledLink = styled(Link, {
	shouldForwardProp: prop => prop !== 'inverted',
})(
	({ theme: { colors }, inverted }) => css`
		display: inline-flex;
		align-items: center;
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

		* + * {
			padding-left: ${em(5)};
		}

		${inverted &&
		css`
			background: transparent;
			color: ${colors.green};

			&:hover,
			&:focus {
				background: ${colors.green};
				color: ${colors.background};
			}
		`}
	`
)

const Button = ({ to, className, children, ...rest }) => {
	return (
		<StyledLink to={to} className={className} {...rest}>
			{children}
		</StyledLink>
	)
}

export default Button
