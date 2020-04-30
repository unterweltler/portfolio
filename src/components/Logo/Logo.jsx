import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import logo from '../../assets/logo.svg'

const StyledLogo = styled.img(
	({ theme: { mixins } }) => css`
		width: auto;
		${mixins.fluidStyle('max-height', { min: 32, max: 48 })};
	`
)

const Logo = () => (
	<Link to="/">
		<StyledLogo src={logo} alt="Logo" />
	</Link>
)

export default Logo
