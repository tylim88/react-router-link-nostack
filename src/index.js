import React from 'react'

const createLinkNoStack = (Link, withRouter) => {
	return withRouter(props => {
		const { staticContext, match, history, location, to, onClick, onSamePage, ...otherProps } = props

		let isSamePath = false
		try {
			isSamePath = location.pathname.toLowerCase() === to.toLowerCase() || to === '#'
		} catch (e) {
			console.error('"to" props accept only strings(created by "react-router-link-nostack")')
		}
		const onClick_ = e => {
			isSamePath && onSamePage && onSamePage()
			onClick && onClick(e)
		}

		return <Link to={to} onClick={onClick_} replace={isSamePath} {...otherProps} />
	})
}

export default createLinkNoStack
