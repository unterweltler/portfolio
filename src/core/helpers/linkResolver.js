export const linkResolver = doc => {
	// URL for a page type
	if (doc.type === 'page') {
		return `/${doc.uid}`
	}
	// URL for a project type
	if (doc.type === 'project') {
		return `/project/${doc.uid}`
	}
	// Backup for all other types
	return '/'
}
