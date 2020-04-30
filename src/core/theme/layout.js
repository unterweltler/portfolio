const layout = [
	{
		name: 'zero',
		breakpoint: 0,
	},
	{
		name: 'micro',
		breakpoint: 360,
	},
	{
		name: 'small',
		breakpoint: 600,
	},
	{
		name: 'medium',
		breakpoint: 720,
	},
	{
		name: 'large',
		breakpoint: 1024,
	},
]

const reducer = key =>
	layout.reduce((acc, item) => {
		acc[item.name] = item[key]
		return acc
	}, {})

const breakpoints = reducer('breakpoint')

export { layout, breakpoints }
