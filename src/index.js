import React from 'react'

const createLinkNoStack = (Link, withRouter) =>
	withRouter(props => {
		const { staticContext, match, history, location, to, onClick, children, onSamePage, ...otherProps } = props

		let isSamePath = false

		console.log('rerendered')

		try {
			isSamePath = location.pathname.toLowerCase() === to.toLowerCase()
		} catch (e) {
			console.error('"to" props accept only strings(created by "react-router-link-nostack")')
		}

		const onClick_ = e => {
			isSamePath && onSamePage && onSamePage()
			onClick && onClick(e)
		}

		return (
			<Link to={to} onClick={onClick_} replace={isSamePath} {...otherProps}>
				{children}
			</Link>
		)
	})

export default createLinkNoStack
