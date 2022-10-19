import { useQuery } from 'react-query'
import { fetchGif } from '../gif'
import { GifType } from '../gif'

export const GIF_QUERY_KEY: string = 'fetchingGif'

export const useGif = () => useQuery<GifType, Error>(GIF_QUERY_KEY, fetchGif, {enabled: false})