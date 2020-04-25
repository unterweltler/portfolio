import { em } from 'polished'
import { up } from '../helpers/Breakpoints'
import { breakpoints } from './layout'

const formatSize = value => (typeof value === 'number' && value !== 0 ? em(value) : value)

const responsiveStyles = props => {
	let style = ``

	Object.keys(breakpoints).forEach(breakpoint => {
		let breakpointStyle = ''

		Object.keys(props).forEach(prop => {
			const valuesOrValue = props[prop]
			let value

			if (Array.isArray(valuesOrValue)) {
				// array with single value that should be carried for all breakpoints
				;[value] = valuesOrValue
			} else if (typeof valuesOrValue === 'object') {
				// object with breakpoint:value pairs
				value = valuesOrValue[breakpoint]
			} else if (breakpoint === 'zero') {
				// single value that should be applied without any media queries
				value = valuesOrValue
			}

			if (typeof value !== 'undefined') {
				breakpointStyle += `${prop}: ${formatSize(value)};`
			}
		})

		if (breakpointStyle) {
			if (breakpoint === 'zero') {
				style += breakpointStyle
			} else {
				style += `
				${up(breakpoint)} { ${breakpointStyle} }`
			}
		}
	})

	return style
}

const fluidStyle = (prop, { min, max, minViewport = 360, maxViewport = 1200 }) => {
	let style = ``

	style += `${prop}: ${em(max)};`
	style += `${prop}: clamp(${em(min)}, calc(${em(min)} + (${max} - ${min}) * (100vw - ${em(
		minViewport
	)}) / (${maxViewport} - ${minViewport})), ${em(max)});`

	return style
}

const mixins = {
	responsiveStyles,
	fluidStyle,
}

export default mixins
