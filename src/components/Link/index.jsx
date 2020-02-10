import React, { useCallback, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

const checkToProps = (to = '', pathname = '') => {
	try {
		return pathname.toLowerCase() === to.toLowerCase() || to === '#'
	} catch (e) {
		console.error('(react-router-link-nostack) "to" props accept only strings')
		return null
	}
}

const runOnSamePage = (e, isSamePath, onSamePage) => {
	if (isSamePath) {
		onSamePage && onSamePage(e)
	}
}

const LinkNoStack = memo(props => {
	const { to, onClick, onSamePage, ...otherProps } = props
	const location = useLocation()

	const isSamePath = checkToProps(to, location.pathname)

	const onClick_ = useCallback(
		e => {
			runOnSamePage(e, isSamePath, onSamePage)
			onClick && onClick(e)
		},
		[isSamePath, onClick, onSamePage]
	)

	return (
		<Link to={to} onClick={onClick_} replace={isSamePath} {...otherProps} />
	)
})

export { LinkNoStack as default, checkToProps, runOnSamePage }
