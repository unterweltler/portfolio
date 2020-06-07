import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Button from '../Button'
import { IoMdArrowRoundBack } from 'react-icons/io'

const StyledWrapper = styled.div(
	({ theme: { mixins } }) => css`
		grid-column: 2 / 5;

		display: grid;
		${mixins.responsiveStyles({
			'grid-template-columns': { small: 'repeat(2, 1fr)', large: 'repeat(3, 1fr)' },
		})};
		gap: 1rem;

		a {
			display: flex;
		}
	`
)
const StyledBackWrapper = styled.div(
	({ theme: { mixins } }) => css`
		${mixins.responsiveStyles({ 'grid-column': { small: 'span 2', medium: '1' } })}
	`
)

const StyledPrevWrapper = styled.div(
	({ theme: { mixins } }) => css`
		${mixins.responsiveStyles({ 'grid-column-start': { small: '1', large: 'auto' } })}
	`
)

const StyledNextButton = styled.div``

const LinkBlock = ({ back, prev, next }) => {
	const hasBack = !!back
	const hasPrev = !!prev
	const hasNext = !!next

	return (
		<StyledWrapper>
			{hasBack && (
				<StyledBackWrapper>
					<Button to={back.to} inverted={hasPrev || hasNext}>
						<IoMdArrowRoundBack />
						<span>{back.text}</span>
					</Button>
				</StyledBackWrapper>
			)}
			{hasPrev && (
				<StyledPrevWrapper>
					<Button to={prev.to}>
						<span>Prev:</span>
						<span>{prev.text}</span>
					</Button>
				</StyledPrevWrapper>
			)}
			{hasNext && (
				<StyledNextButton>
					<Button to={next.to}>
						<span>Next:</span>
						<span>{next.text}</span>
					</Button>
				</StyledNextButton>
			)}
		</StyledWrapper>
	)
}

export default LinkBlock
