import React, { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const checkToProps = (
	to: React.ComponentProps<typeof Link>['to'] = '',
	pathname = ''
) => {
	if (typeof to === 'string' && typeof pathname === 'string') {
		return pathname.toLowerCase() === to.toLowerCase() || to === '#'
	} else {
		return false
	}
}

const runOnSamePage = (
	e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	isSamePath: boolean,
	onSamePage?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
) => {
	if (isSamePath) {
		onSamePage && onSamePage(e)
	}
}

const LinkNoStack: React.FC<{
	to: React.ComponentProps<typeof Link>['to']
	onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
	onSamePage?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}> = props => {
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
}

export { LinkNoStack as default, checkToProps, runOnSamePage }
