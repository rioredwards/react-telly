import React from 'react'
import { PageWrapper } from './home.styles'
import { Header, GifViewer, Button } from '../../components'
import { useGif } from '../../data/hooks/useGif'

export const HomePage = () => {
	//this is how you'll fetch data
	const { data: gif, refetch: fetchNewGif, isLoading, isFetching, isError  } = useGif()

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer />
		</PageWrapper>
	)
}
