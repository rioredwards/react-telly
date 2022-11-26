import React from 'react'
import { ViewerWrapper, ViewerFrame, Gif, Antennae, Feet } from './GifViewer.styles'
import { LoadingScreen } from './LoadingScreen'
import { NoContentScreen } from './NoContentScreen'

type Props = {
	gifUrl?: string | null,
	altText?: string | null,
	isLoading?: boolean,
	isError?: boolean,
}

export const GifViewer: React.FC<Props> = ( { gifUrl, altText, isLoading, isError } ) => {
	const noContentToLoad: boolean = !isLoading && !gifUrl
	return (
		<ViewerWrapper>
			<Antennae />
			<ViewerFrame>
			{ isLoading && <LoadingScreen /> }
			{ gifUrl && !isLoading && <Gif src={gifUrl} alt={altText ?? ""} /> }
			{ noContentToLoad && <NoContentScreen /> }
			{ isError && <NoContentScreen title={'Error :('} /> }
			</ViewerFrame>
			<Feet />
		</ViewerWrapper>
	)
}
