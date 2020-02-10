import React from 'react'
import Link, { checkToProps, runOnSamePage } from './index'
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

describe('utilities test', () => {
	describe('test checkToProps', () => {
		const inputArr = [
			{ i1: 'haha', i2: 'haha', o: true },
			{ i1: '#', i2: 'haha', o: true },
			{ i1: 'hoho', i2: 'haha', o: false },
			{ i1: {}, i2: 'haha', o: null },
			{ i1: '#', i2: null, o: null },
			{ i1: '#', i2: [], o: null },
		]
		expect.assertions(1)
		inputArr.forEach(input => {
			it(`test string input ${JSON.stringify(input)}`, () => {
				expect.assertions(1)
				const { i1, i2, o } = input
				const output = checkToProps(i1, i2)
				expect(output).toBe(o)
			})
		})
	})

	describe('test runOnSamePage', () => {
		const value = {}
		const inputArr = [
			{
				i1: '123',
				i2: true,
			},
			{
				i1: null,
				i2: true,
			},
			{
				i1: '456',
				i2: false,
			},
			{ i1: '123', i2: true },
			{ i1: '456', i2: false },
			{
				i1: '456',
				i2: false,
			},
			{
				i1: null,
				i2: true,
			},
		].map((obj, i) => {
			const { i1, i2 } = obj
			obj.i3 = e => {
				value[i] = e
			}
			obj.o = i2 ? i1 : undefined
			return obj
		})

		expect.assertions(1)
		inputArr.forEach((input, i) => {
			it(`test input no ${i} : ${JSON.stringify(input)}`, () => {
				expect.assertions(2)
				const { i1, i2, i3, o } = input
				const output = runOnSamePage(i1, i2, i3)
				expect(output).toBe(undefined)
				expect(value[i]).toBe(o)
			})
		})
	})
})
