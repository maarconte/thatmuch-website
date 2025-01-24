interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Thatmuch', // Site author
	title: 'Le blog de l\'équipage', // Site title.
	description: 'The default Astro theme based on the famous Kubrick from WordPress.', // Description to display in the meta tags
	lang: 'fr-FR',
	ogLocale: 'fr-FR',
	shareMessage: 'Partager', // Message to share a post on social media
	paginationSize: 4 // Number of posts per page
}

// List of categories for blog posts
export const CATEGORIES = [
	'Développement',
	'Design',
	'Projet',
	'Communication',
] as const

export const BLOGROLL = [
	{
		title: 'Sr.Hart',
		url: 'https://srhart.co'
	},
	{
		title: 'Velocidad de Escape',
		url: 'https://velocidadescape.com/'
	},
	{
		title: 'Astro',
		url: 'https://astro.build'
	}
] as const
