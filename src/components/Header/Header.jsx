import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Logo from '../Logo'

const StyledHeader = styled.header(
	({ theme: { colors, mixins } }) => css`
		grid-column: 2 / 5;
		${mixins.fluidStyle('padding-top', { min: 16, max: 24 })};
		${mixins.fluidStyle('padding-bottom', { min: 16, max: 24 })};
		background-color: ${colors.background};
	`
)

const Header = () => (
	<StyledHeader>
		<Logo />
	</StyledHeader>
)

export default Header
