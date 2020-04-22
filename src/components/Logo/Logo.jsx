import React from 'react'
import styled from '@emotion/styled'
import { em } from 'polished'
import logo from '../../assets/logo.svg'

const StyledLogo = styled.img`
	width: auto;
	max-height: ${em(48)};
	max-height: clamp(${em(32)}, 1em + 5vw, ${em(48)});
`

const Logo = () => <StyledLogo src={logo} alt="Logo" />

export default Logo
