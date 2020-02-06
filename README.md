# react-router-link-nostack

This is a Link Component that take in React Router's `Link` and `withRouter` to create new component that prevent stacking in browser history when revisiting the current route.

## Installation

```bash
npm i react-router-link-nostack
```

## Usage

simply use it just like you use React Router Link

```jsx
import React from 'react'
import { render } from 'react-dom'
import Link from 'react-router-link-nostack'
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

```

Try [Demo](https://tylim88.github.io/react-router-link-nostack)  
Or  
Use [Sandbox](https://codesandbox.io/s/interesting-ganguly-huwcr)

## API

This `Link` works like and has the same properties as [React Router's Link](https://reacttraining.com/react-router/web/api/Link), plus:

1. `onSamePage`: callback that trigger when user revisit the same page, can be undefined or null
