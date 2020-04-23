import { pageOffsets } from './layout'
import mixins from './mixins'

const theme = {
	animations: {
		duration: 0.25,
		timingFunc: 'ease-out',
	},
	// dracula theme colors - https://github.com/dracula/dracula-theme
	colors: {
		background: '#282a36',
		foreground: '#f8f8f2',
		comment: '#6272a4',
		cyan: '#8be9fd',
		green: '#50fa7b',
		orange: '#ffb86c',
		pink: '#ff79c6',
		purple: '#bd93f9',
		red: '#ff5555',
		yellow: '#f1fa8c',
	},
	layout: {
		maxWidth: '120ch',
		pageOffsets,
	},
	mixins,
}

export default theme
