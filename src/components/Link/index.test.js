import React from 'react'
import Link from './index'
import { MemoryRouter } from 'react-router-dom'
import { create } from 'react-test-renderer'

it('snapshot test', () => {
	const tree = create(
		<MemoryRouter>
			<Link to='/' />
		</MemoryRouter>
	).toJSON()
	expect(tree).toMatchSnapshot()
})
