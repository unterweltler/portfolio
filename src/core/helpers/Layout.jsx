import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import GlobalStyles from '../theme/GlobalStyles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SEO from './SEO'

const StyledContainer = styled.div(
	({
		theme: {
			layout: { maxWidth },
			mixins,
		},
	}) => css`
		display: grid;
		grid-template-columns:
			1rem
			1fr
			minmax(auto, 57ch)
			1fr
			1rem;
		max-width: ${maxWidth};
		margin: 0 auto;
		${mixins.fluidStyle('row-gap', { min: 32, max: 64 })};
	`
)

const Layout = ({ children }) => (
	<>
		<SEO />
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledContainer>
				<Header />
				{children}
				<Footer />
			</StyledContainer>
		</ThemeProvider>
	</>
)

export default Layout
