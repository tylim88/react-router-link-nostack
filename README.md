# react-router-link-nostack

This component is based on React Router's Link component, use this component to prevent stacking in browser history when revisiting the current route.

## Installation

```bash
npm i react-router-link-nostack
```

## Import

```jsx
import LinkNoStack from 'react-router-link-nostack'

```

## API

It works like and has the same properties as [React Router's Link](https://reacttraining.com/react-router/web/api/Link), plus:

1. onSamePage: callback that trigger when user revisit the same page, can be undefined
