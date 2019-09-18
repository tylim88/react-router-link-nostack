import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Link, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import createLinkNoStack from '../../src'

const history = createBrowserHistory()

const LinkNoStack = createLinkNoStack(Link, withRouter)

class Demo extends Component {
	render() {
		return (
			<Router history={history}>
				<div>
					<h1>react-router-link-nostack Demo</h1>
					<LinkNoStack to={'/123'}>test</LinkNoStack>
				</div>
			</Router>
		)
	}
}

render(<Demo />, document.querySelector('#demo'))
