import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Link, withRouter, Route, Switch } from 'react-router-dom'
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
					<LinkNoStack to='/'>to index</LinkNoStack>
					<br />
					<LinkNoStack to='/123'>to 123</LinkNoStack>
				</div>
				<br />
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return <p> Index{console.log('rerender index')}</p>
						}}
					/>
					<Route
						exact
						path='/123'
						render={() => {
							return <p> 123{console.log('rerender 123')}</p>
						}}
					/>
				</Switch>
			</Router>
		)
	}
}

render(<Demo />, document.querySelector('#demo'))
