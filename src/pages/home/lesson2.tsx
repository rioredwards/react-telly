import React, {useState} from 'react'
import { PageWrapper } from './home.styles'
import { Header, GifViewer, Button, TextInput } from '../../components'
import { useGif } from '../../data/hooks/useGif'
import { DEFAULT_KEYWORD } from './home'

export const Lesson2 = () => {
	const [ keyWord, setKeyWord ] = useState<string>(DEFAULT_KEYWORD) 
	const { data: gif, refetch: fetchNewGif, isLoading, isFetching, isError,   } = useGif(keyWord)
	const [ isPlaying, setIsPlaying ] = useState<boolean>(false)
	const buttonTitle: string = isPlaying ? 'Change the channel' : 'Start'
	const isNoGifReturned: boolean = Boolean(gif?.data) && ! Boolean(gif?.data.images)

	const onButtonClick = () => {
		fetchNewGif()
		setKeyWord('')
		if (!isPlaying){ 
			setIsPlaying(true)
		}
	}

	return (
		<PageWrapper>
			<Header>Lesson 2</Header>
			<GifViewer 
				gifUrl={gif?.data.images?.downsized_medium.url}
				isError={isError}
				isLoading={isLoading || isFetching} 
				isNoGifReturned={isNoGifReturned}
			/>
			<TextInput  onChange={setKeyWord} placeholder="Enter a keyword" value={keyWord} />
			<Button onClick={onButtonClick}>{ buttonTitle }</Button>
		</PageWrapper>
	)
}
