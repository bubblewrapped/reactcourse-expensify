import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('Should render ExpensesSummary correctly with many expenses', () => {
	const wrapper = shallow(<ExpensesSummary  expenses={expenses} />);
	expect(wrapper).toMatchSnapshot();
});

test('Should render ExpensesSummary correctly with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary  expenses={[expenses[0]]} />);
	expect(wrapper).toMatchSnapshot();
});