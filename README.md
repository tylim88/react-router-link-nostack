# react-router-link-nostack

This is a simple HOC that take in React Router's `Link` and `withRouter` to create new component that prevent stacking in browser history when revisiting the current route.

## Installation

```bash
npm i react-router-link-nostack
```

## Usage

```jsx
import createLinkNoStack from 'react-router-link-nostack'
import { Link, withRouter } from 'react-router-dom'

const LinkNoStack = CreateLinkNoStack(Link, withRouter)

export default LinkNoStack

```

## API

The created `LinkNoStack` works like and has the same properties as [React Router's Link](https://reacttraining.com/react-router/web/api/Link), plus:

1. `onSamePage`: callback that trigger when user revisit the same page, can be undefined or null

note:, no rerender when route to the same page, which is why you need this `onSamePage` props if you want to rerender.
