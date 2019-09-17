import React from 'react'

const LinkNoStack = (Link, withRouter) =>
	withRouter(props => {
		const {
			match,
			history,
			location: { pathname },
			to,
			onClick,
			children,
			onSamePage,
			...otherProps,
		} = props

		let isSamePath = false

		try {
			isSamePath = pathname.toLowerCase() === to.toLowerCase()
		} catch (e) {
			console.error('"to" props accept only strings(created by "react-router-link-nostack")')
		}

		const to_ = isSamePath ? '#' : to
		const onClick_ = e => {
			if (isSamePath) {
				e.preventDefault()
				onSamePage && onSamePage()
			}
			onClick && onClick(e)
		}

		return (
			<Link to={to_} onClick={onClick_} {...otherProps}>
				{children}
			</Link>
		)
	})

export default LinkNoStack
