import styled from 'styled-components'
import { COLORS, SPACING, FONT_SIZES } from '../../utils/style/constants'

export const StyledButton = styled.button`
	padding: ${SPACING.s};
	border: ${SPACING.xs} solid ${COLORS.primary_freesia};
	border-radius: ${SPACING.s};
	background-color: ${ COLORS.primary_blue_green };
	color: ${ COLORS.neutral_white };
	font-size: ${FONT_SIZES.standard};
	font-family: unset;
	font-weight: 600;
`