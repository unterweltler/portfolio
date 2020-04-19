import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Logo from '../Logo'

const StyledHeader = styled.header(
	({ theme: { colors } }) => css`
		padding: 1em 0;
		background-color: ${colors.background};
	`
)

const Header = () => (
	<StyledHeader>
		<Logo />
	</StyledHeader>
)

export default Header
