# react-router-link-nostack

[![npm](https://img.shields.io/npm/v/react-router-link-nostack)](https://www.npmjs.com/package/react-router-link-nostack) [![GitHub](https://img.shields.io/github/license/tylim88/react-router-link-nostack)](https://github.com/tylim88/react-router-link-nostack/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/tylim88/react-router-link-nostack/pulls) [![tylim88](https://circleci.com/gh/tylim88/react-router-link-nostack.svg?style=shield)](<[LINK](https://github.com/tylim88/react-router-link-nostack#react-router-link-nostack)>)

🎈 Prevent stacking in browser history upon re-navigating current route with custom [React Router](https://www.npmjs.com/package/react-router-dom) Link Component.

🌟 almost 0 learning curve.

🔔 0 dependency.

⛲️ Out of box typescript support.

🦺 Tested.

Note: You need React Router `v5.1` or above to use this!

## Installation

```bash
npm i react-router-link-nostack
```

## Demo

View it at **[GhPage](https://tylim88.github.io/react-router-link-nostack/)**!

Try it at **[Code Sandbox](https://codesandbox.io/s/interesting-ganguly-huwcr)**!

## Usage

simply use it just like you use React Router Link

```jsx
import React from 'react'
import { render } from 'react-dom'
import Link from 'react-router-link-nostack'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Demo = () => {
	return (
		<BrowserRouter basename={'/'}>
			<div>
				<h1>react-router-link-nostack Demo</h1>
				<Link to='/'>to index</Link>
				<br />
				<Link to='/profile'>to profile</Link>
			</div>
			<br />
			<Switch>
				<Route
					exact
					path='/'
					render={() => {
						return (
							<>
								<Helmet>
									<title>Index</title>
								</Helmet>
								<p>Now at Index Page(route: '/')</p>
							</>
						)
					}}
				/>
				<Route
					exact
					path='/profile'
					render={() => {
						return (
							<>
								<Helmet>
									<title>Profile</title>
								</Helmet>
								<p>Now at Profile Page(route: '/profile')</p>
							</>
						)
					}}
				/>
			</Switch>
			<p>
				try to click the same route multiple time and see it wont add to history
				stack!
			</p>
		</BrowserRouter>
	)
}

render(<Demo />, document.getElementById('root'))
```

## API

This `Link` works like and has the same properties as [React Router's Link](https://reacttraining.com/react-router/web/api/Link), plus:

1. `onSamePage(event)`: callback that trigger when user revisit the same page, can be undefined or null, accept event object.

```jsx
<Link
	to='/profile'
	onSamePage={() => {
		console.log('same page and wont stack history!')
	}}
>
	to profile
</Link>
```
