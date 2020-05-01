import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { rem } from 'polished'
import Logo from '../Logo'

const StyledHeader = styled.header(
	({ theme: { colors } }) => css`
		grid-column: 2 / 5;
		padding: ${rem(24)} 0;
		background-color: ${colors.background};
	`
)

const Header = () => (
	<StyledHeader>
		<Logo />
	</StyledHeader>
)

export default Header
