import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import logo from '../../assets/logo.svg'

const StyledLogo = styled.img(
	({ theme: { mixins } }) => css`
		width: auto;
		${mixins.fluidStyle('max-height', { min: 32, max: 48 })};
	`
)

const Logo = () => <StyledLogo src={logo} alt="Logo" />

export default Logo
