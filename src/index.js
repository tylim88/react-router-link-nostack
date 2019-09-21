import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Link, withRouter, Route, Switch } from 'react-router-dom'
import createLinkNoStack from 'react-router-link-nostack'

const LinkNoStack = createLinkNoStack(Link, withRouter)

class Demo extends Component {
	render() {
		return (
			<BrowserRouter basename={'/react-router-link-nostack'}>
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
			</BrowserRouter>
		)
	}
}

render(<Demo />, document.querySelector('#root'))
