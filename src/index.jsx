import React from 'react'
import { render } from 'react-dom'
import Link from './components/Link'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Demo = () => {
	return (
		<BrowserRouter basename={'/react-router-link-nostack'}>
			<div>
				<h1>react-router-link-nostack Demo</h1>
				<Link to='/'>to index</Link>
				<br />
				<Link to='/123'>to 123</Link>
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

render(<Demo />, document.getElementById('root'))
