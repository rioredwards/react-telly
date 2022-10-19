export const RANDOM_GIPHY_ENDPOINT = '/v1/gifs/random'

const API_KEY: string | undefined = process.env.REACT_APP_GIPHY_API_KEY

export type GifType = {
	data: {
		title: string,
		images: {
			downsized_medium: {
				url: string,
			}
		}
	}
}

export const fetchGif = async(): Promise<GifType> => {

	const requestUrl: string = `${RANDOM_GIPHY_ENDPOINT}?api_key=${API_KEY}&rating=g&tag=dance`

	const response: Response = await fetch(requestUrl, {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'GET',

	})

	const gif: GifType = await ( response ).json()

	return gif
}