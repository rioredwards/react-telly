import styled from 'styled-components'
import { SPACING, COLORS } from '../../utils/style/constants'

export const ViewerWrapper = styled.div`
	position: relative;
	width: 280px;
	padding: ${SPACING.l} 0;
	margin: ${SPACING.m} 0 30px;
`

export const ViewerFrame = styled.div`
	position: relative;
	height: 180px;
	border-radius: ${SPACING.m};
	box-shadow: 0 0 0 ${SPACING.m} ${COLORS.primary_mahogany};
`

export const Antennae = styled.div`
position: absolute;
	width: 60px;
	height: 60px;
	transform: rotate(-45deg);
	top: -50px;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	border-left: ${SPACING.xs} solid ${COLORS.neutral_gray};
	border-bottom: ${SPACING.xs} solid ${COLORS.neutral_gray};
`

export const NoSignalText = styled.p`
	position: absolute;
	margin: auto;
	color: ${COLORS.neutral_white};
	background-color: ${COLORS.neutral_black};
	padding: ${SPACING.xs};
	width: 120px;
	height: 20px;
	text-align: center;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`

export const NoSignalColorWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	border-radius: ${SPACING.m};
`

export const NoSignalColorBar = styled.div`
	width: 25%;

	&:first-child {
		background-color: ${COLORS.primary_fuchsia};
		border-top-left-radius: ${SPACING.m};
		border-bottom-left-radius: ${SPACING.m};
	}

	&:nth-child(2) {
		background-color: ${COLORS.primary_freesia};
	}

	&:nth-child(3) {
		background-color: ${COLORS.primary_blue_green};
	}

	&:last-child {
		background-color: ${COLORS.primary_coral};
		border-top-right-radius: ${SPACING.m};
		border-bottom-right-radius: ${SPACING.m};
	}
`

export const Gif = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	border-radius: ${SPACING.m};
`

export const Feet = styled.div`
	width: ${SPACING.xl};
	height: ${SPACING.m};
	border-right: ${SPACING.m} solid ${COLORS.primary_mahogany};
	border-left: ${SPACING.m} solid ${COLORS.primary_mahogany};
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto	
`
