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

	const getFrameContent = () => {
		if (isLoading) { 
			return <LoadingScreen /> 
		} else if (isError) {
			return <NoContentScreen title={'Error :('} />
		} else if (gifUrl) {
			return <Gif src={gifUrl} alt={altText ?? ""} />
		} else {
			return <NoContentScreen />
		}
	}

	return (
		<ViewerWrapper>
			<Antennae />
			<ViewerFrame>
			{getFrameContent()}
			</ViewerFrame>
			<Feet />
		</ViewerWrapper>
	)
}
