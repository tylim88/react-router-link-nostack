import React, { useState } from 'react'

const createLinkNoStack = (Link, withRouter) => {
	return props => {
		const [, forceUpdate] = useState([])

		const WithRouterLink = withRouter(props => {
			const { staticContext, match, history, location, to, onClick, children, onSamePage, ...otherProps } = props

			let isSamePath = false

			try {
				isSamePath = location.pathname.toLowerCase() === to.toLowerCase()
			} catch (e) {
				console.error('"to" props accept only strings(created by "react-router-link-nostack")')
			}
			const onClick_ = e => {
				forceUpdate([])
				isSamePath && onSamePage && onSamePage()
				onClick && onClick(e)
			}

			return (
				<Link to={to} onClick={onClick_} replace={isSamePath} {...otherProps}>
					{children}
				</Link>
			)
		})
		return <WithRouterLink {...props} />
	}
}

export default createLinkNoStack
