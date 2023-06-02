import React from 'react'
import { PageWrapper } from './home.styles'
import { Header, GifViewer, Button } from '../../components'
import { useGif } from '../../data/hooks/useGif'

export const DEFAULT_KEYWORD = 'dance'

export const HomePage = () => {
	const { data: gif, refetch: fetchNewGif, isLoading, isFetching, isError,   } = useGif(DEFAULT_KEYWORD)

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer />
		</PageWrapper>
	)
}
