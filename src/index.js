import React from 'react'
import { Link, withRouter } from 'react-router-dom'
const LinkNoStack = withRouter(props => {
	const { match, history, location: pathname, to, otherProps } = props

	return <Link {...otherProps} />
})

export default LinkNoStack
