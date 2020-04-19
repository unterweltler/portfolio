import React from 'react'
import styled from '@emotion/styled'
import { em } from 'polished'
import logo from '../../assets/logo.svg'

const StyledLogo = styled.img`
	max-height: ${em(50)};
	width: auto;
`

const Logo = () => <StyledLogo src={logo} alt="Logo" />

export default Logo
