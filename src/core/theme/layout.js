const layout = [
	{
		name: 'zero',
		breakpoint: 0,
		pageOffset: 16,
	},
	{
		name: 'micro',
		breakpoint: 360,
		pageOffset: 24,
	},
	{
		name: 'small',
		breakpoint: 600,
		pageOffset: 32,
	},
	{
		name: 'medium',
		breakpoint: 720,
		pageOffset: 32,
	},
	{
		name: 'large',
		breakpoint: 1024,
		pageOffset: 40,
	},
]

const reducer = key =>
	layout.reduce((acc, item) => {
		acc[item.name] = item[key]
		return acc
	}, {})

const breakpoints = reducer('breakpoint')
const pageOffsets = reducer('pageOffset')

export { layout, breakpoints, pageOffsets }
