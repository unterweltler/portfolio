import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import logo from '../../assets/logo.svg'

const StyledLogo = styled.img(
	({
		theme: {
			mixins: { responsiveStyles },
		},
	}) => css`
		width: auto;

		${responsiveStyles({
			'max-height': { zero: 24, medium: 32, large: 48 },
		})};
	`
)

const Logo = () => <StyledLogo src={logo} alt="Logo" />

export default Logo
