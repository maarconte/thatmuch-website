interface WPGraphParams {
	query: string
	variables?: object
}

export async function wpquery({ query, variables }: WPGraphParams) {

	const res = await fetch('https://wordpress.thatmuch.fr/graphql', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ query, variables }),
	})

	if (!res.ok) {
		console.error(res)
		return {}
	}

	const { data } = await res.json()
	return data;
}
