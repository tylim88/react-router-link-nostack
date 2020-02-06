import React, { useState } from 'react'

const createLinkNoStack = (Link, withRouter) => {
	return withRouter(props => {
		const { staticContext, match, history, location, to, onClick, onSamePage, ...otherProps } = props

		const [, forceUpdate] = useState([])

		let isSamePath = false
		try {
			isSamePath = location.pathname.toLowerCase() === to.toLowerCase() || to === '#'
		} catch (e) {
			console.error('(react-router-link-nostack) "to" props accept only strings')
		}
		const onClick_ = e => {
			forceUpdate([])
			isSamePath && onSamePage && onSamePage()
			onClick && onClick(e)
		}

		return <Link to={to} onClick={onClick_} replace={isSamePath} {...otherProps} />
	})
}

export default createLinkNoStack
