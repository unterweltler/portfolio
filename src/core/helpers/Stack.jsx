import React, { Children } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { em } from 'polished'

const StyledComponent = styled.div``

const StyledItem = styled.div(
	({ space }) => css`
		& + & {
			padding-top: ${em(space)};
		}
	`
)

const Stack = ({ component = 'div', children, space = 0, className }) => {
	const stackItems = Children.toArray(children)
	const isList = component === 'ol' || component === 'ul'
	const stackItemComponent = isList ? 'li' : 'div'

	if (stackItems.length <= 1) {
		return <>{stackItems}</>
	}

	return (
		<StyledComponent as={component} className={className}>
			{stackItems.map((child, index) => (
				<StyledItem as={stackItemComponent} key={index} space={space}>
					{child}
				</StyledItem>
			))}
		</StyledComponent>
	)
}

export default Stack
