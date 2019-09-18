import React,{useCallback} from 'react'

const LinkNoStack = (Link, withRouter) =>
	withRouter(props => {
		const {
			staticContext,
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

		console.log('rerendered')

		try {
			isSamePath = pathname.toLowerCase() === to.toLowerCase()
		} catch (e) {
			console.error('"to" props accept only strings(created by "react-router-link-nostack")')
		}

		const to_ = isSamePath ? '#' : to

		const onClick_ = useCallback(e => {
			isSamePath&&onSamePage && onSamePage()
			onClick && onClick(e)
		},[])

		return (
			<Link to={to_} onClick={onClick_} replace={isSamePath} {...otherProps}>
				{children}
			</Link>
		)
	})

export default LinkNoStack
