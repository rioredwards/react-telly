import React from 'react'
import { StyledButton } from './Button.styles'

type Props = {
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
	children: React.ReactNode,
}

export const Button: React.FC<Props> = ( props ) => {
	const { onClick, children } = props
	return (
		<StyledButton role={'button'} onClick={onClick}>
			{ children }
		</StyledButton>
	)
}

