import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { useTheme } from 'emotion-theming'
import { SvgLogo } from '../../assets'

const logoHeight = { min: 32, max: 48 }

const StyledLink = styled(Link)(
	({
		theme: {
			animations: { duration, timingFunc },
			mixins,
		},
	}) => css`
		// TODO: find way to re-enable focus outline
		display: inline-block;
		${mixins.fluidStyle('height', logoHeight)};

		svg {
			transition: transform ${duration}s ${timingFunc};
		}

		&:hover,
		&:focus {
			svg {
				&:nth-of-type(2) {
					transform: translate3d(2px, 2px, 0);
					transition-delay: 0.1s;
				}

				&:nth-of-type(3) {
					transform: translate3d(2px, -2px, 0);
					transition-delay: 0.2s;
				}
			}
		}
	`
)

const StyledLogo = styled(SvgLogo, {
	shouldForwardProp: prop => prop !== 'options',
})(
	({ theme: { mixins }, options: { zIndex } }) => css`
		position: absolute;
		${mixins.fluidStyle('height', logoHeight)};
		z-index: ${zIndex};
	`
)

const Logo = () => {
	const theme = useTheme()

	return (
		<StyledLink to="/" tabIndex={0}>
			<StyledLogo color={theme.colors.foreground} options={{ zIndex: 3 }} />
			<StyledLogo color={theme.colors.pink} options={{ zIndex: 2 }} />
			<StyledLogo color={theme.colors.cyan} options={{ zIndex: 1 }} />
		</StyledLink>
	)
}

export default Logo
