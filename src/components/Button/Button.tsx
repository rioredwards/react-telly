import React from 'react'
import { StyledButton } from './Button.styles'

type Props = {
	title: string
}

export const Button: React.FC<Props> = ( { title } ) => {
	return (
		<StyledButton role={'button'}>
			{ title }
		</StyledButton>
	)
}

