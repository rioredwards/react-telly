import React from "react"
import { PageWrapper } from "./home.styles"
import { Header, GifViewer, Button } from "../../components"
import { useGif } from "../../data/hooks/useGif"

export const DEFAULT_KEYWORD = "dance"

export const HomePage = () => {
	const {
		data: gif,
		refetch: fetchNewGif,
		isLoading,
		isFetching,
		isError,
	} = useGif(DEFAULT_KEYWORD)

	const [tvStarted, setTvStarted] = React.useState<boolean>(false)
	const buttonMsg: string = tvStarted ? "Change Channel" : "Start"

	const handleButtonClick = (): void => {
		fetchNewGif()
		if (!tvStarted) setTvStarted(true)
	}

	return (
		<PageWrapper>
			<Header>React Telly</Header>
			<GifViewer
				altText={gif?.data.title}
				gifUrl={gif?.data.images.downsized_medium.url}
				isError={isError}
				isLoading={isLoading || isFetching}
			/>
			<Button onClick={handleButtonClick} children={buttonMsg} />
		</PageWrapper>
	)
}
