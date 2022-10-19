import React from 'react'
import { ViewerWrapper, ViewerFrame, NoSignalText, Gif, Antennae, NoSignalColorWrapper, NoSignalColorBar, Feet } from './GifViewer.styles'

type Props = {
	gifUrl?: string | null
	altText?: string | null
}

export const GifViewer: React.FC<Props> = ( { gifUrl, altText } ) => {
	return (
		<ViewerWrapper>
			<Antennae />
			<ViewerFrame>
			{
				gifUrl ? <Gif src={gifUrl} alt={altText ?? ""} />
				: <React.Fragment>
					<NoSignalText>No Signal :(</NoSignalText>
					<NoSignalColorWrapper>
						<NoSignalColorBar />
						<NoSignalColorBar />
						<NoSignalColorBar />
						<NoSignalColorBar />
					</NoSignalColorWrapper>
				</React.Fragment>
			}
			</ViewerFrame>
			<Feet />
		</ViewerWrapper>
	)
}
