import React from 'react'
import { css, Global } from '@emotion/core'
import { normalize } from 'polished'

const GlobalStyles = () => (
	<Global
		styles={({ colors }) => css`
			${normalize()}

			html {
				box-sizing: border-box;
			}

			html,
			body {
				background-color: ${colors.background};
			}

			body {
				font-family: monospace;
				color: ${colors.foreground};
			}

			@supports (font-variation-settings: normal) {
				body {
					font-family: 'Fira Code', monospace;
				}
			}
		`}
	/>
)

export default GlobalStyles
