import React from 'react'
import { css, Global } from '@emotion/core'
import { normalize } from 'polished'

const GlobalStyles = () => (
	<Global
		styles={({ animations, colors, mixins }) => css`
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

			p {
				&:last-of-type {
					margin-bottom: 0;
				}
			}

			h1,
			h2,
			h3,
			h4 {
				color: ${colors.pink};
				line-height: 1;

				&:first-of-type {
					margin-top: 0;
				}

				&:before {
					content: '→';
					color: ${colors.green};
					padding-right: 0.5rem;
					font-size: 120%;
				}

				&:after {
					content: '()';
					color: ${colors.cyan};
					padding-left: 0.25rem;
					font-size: 80%;
				}
			}

			h1 {
				${mixins.fluidStyle('font-size', { min: 26, max: 30 })};
			}

			h2 {
				${mixins.fluidStyle('font-size', { min: 22, max: 26 })};
			}

			h3 {
				${mixins.fluidStyle('font-size', { min: 18, max: 22 })};
			}

			h4 {
				${mixins.fluidStyle('font-size', { min: 16, max: 18 })};
			}
		`}
	/>
)

export default GlobalStyles
