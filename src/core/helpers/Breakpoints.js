import { em } from 'polished'
import { breakpoints } from '../theme/layout'

// check for given condition, on false output given message
const checkCondition = (condition, message) => {
	if (!condition) {
		throw new Error(`[emotion-breakpoints]: ${message}`)
	}
}

// check for orientation
const withOrientationOrNot = (params, orientation) => {
	let mediaQuery

	if (!orientation) {
		// if no orientation passed - just return params
		mediaQuery = params
	} else {
		// set allowed values for orientation and run `checkCondition` function
		const isValidOrientation =
			orientation === 'portrait' || orientation === 'landscape'
		checkCondition(
			isValidOrientation,
			`${orientation} is invalid orientation. Use 'landscape' or 'portrait'.`
		)

		// return params with orientation
		mediaQuery = `${params} and (orientation: ${orientation})`
	}

	return mediaQuery
}

// return min-width media query
const withMinMedia = minWidth => `@media (min-width: ${minWidth})`

// return max-width media query
const withMaxMedia = maxWidth => `@media (max-width: ${maxWidth})`

// return min-width / max-width media query
const withMinAndMaxMedia = (minWidth, maxWidth) =>
	`@media (min-width: ${minWidth}) and (max-width: ${maxWidth})`

// get min breakpoint width
const calcMinWidth = breakName => {
	let minWidth

	if (typeof breakName === 'number') {
		// if breakName is a number - return that number in em
		minWidth = em(breakName)
	} else {
		// check if breakName is in theme breakpoints object
		checkCondition(
			breakpoints[breakName] !== undefined,
			`${
				breakpoints[breakName]
			} is an invalid breakpoint name. Available Breakpoints: ${Object.keys(
				breakpoints
			).join(', ')}`
		)

		// return breakName value from theme breakpoints object
		minWidth = em(breakpoints[breakName])
	}

	return minWidth
}

// get max breakpoint width
const calcMaxWidth = breakName => {
	let maxWidth

	if (typeof breakName === 'number') {
		// if breakName is a number - return that number in em - minus 1px
		maxWidth = em(breakName - 1)
	} else {
		// check if breakName is in theme breakpoints object
		checkCondition(
			breakpoints[breakName] !== undefined,
			`${
				breakpoints[breakName]
			} is an invalid breakpoint name. Available Breakpoints: ${Object.keys(
				breakpoints
			).join(', ')}`
		)

		// return breakName value from theme breakpoints object - minus 1px
		maxWidth = em(breakpoints[breakName] - 1)
	}

	return maxWidth
}

// get media query for resolutions up the given breakpoint
const up = (breakName, orientation) =>
	withOrientationOrNot(withMinMedia(calcMinWidth(breakName)), orientation)

// get media query for resolutions down the given breakpoint
const down = (breakName, orientation) =>
	withOrientationOrNot(withMaxMedia(calcMaxWidth(breakName)), orientation)

// get media query for resolutions between the given breakpoints
const between = (minBreakName, maxBreakName, orientation) =>
	withOrientationOrNot(
		withMinAndMaxMedia(calcMinWidth(minBreakName), calcMaxWidth(maxBreakName)),
		orientation
	)

export { up, down, between }
