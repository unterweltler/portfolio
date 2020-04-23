import React from 'react'
import { css, Global } from '@emotion/core'
import { normalize } from 'polished'

const GlobalStyles = () => (
	<Global
		styles={({ animations, colors }) => css`
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
				line-height: 1.5;
				color: ${colors.foreground};
			}

			@supports (font-variation-settings: normal) {
				body {
					font-family: 'Fira Code', monospace;
				}
			}

			img {
				display: block;
				max-width: 100%;
			}

			a {
				color: inherit;
				text-decoration-skip-ink: auto;
				text-decoration-color: ${colors.pink};
				text-decoration-thickness: 0.125em;
				text-underline-offset: 2px;
				transition: all ${animations.duration}s ${animations.timingFunc};

				&:hover,
				&:focus {
					color: ${colors.pink};
					text-decoration-color: ${colors.green};
				}
			}
		`}
	/>
)

export default GlobalStyles
