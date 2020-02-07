import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const LinkNoStack = props => {
	const { to, onClick, onSamePage, ...otherProps } = props
	const location = useLocation()

	let isSamePath = false
	try {
		isSamePath =
			location.pathname.toLowerCase() === to.toLowerCase() || to === '#'
	} catch (e) {
		console.error('(react-router-link-nostack) "to" props accept only strings')
	}
	const onClick_ = e => {
		if (isSamePath) {
			onSamePage && onSamePage()
		}
		onClick && onClick(e)
	}

	return (
		<Link to={to} onClick={onClick_} replace={isSamePath} {...otherProps} />
	)
}

export default LinkNoStack
