import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import GlobalStyles from '../theme/GlobalStyles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const StyledContainer = styled.div(
	({
		theme: {
			page: { maxWidth },
		},
	}) => css`
		max-width: ${maxWidth};
		margin: 0 auto;
	`
)

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<StyledContainer>
			<Header />
			{children}
			<Footer />
		</StyledContainer>
	</ThemeProvider>
)

export default Layout
