import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add expense', () => {
	const expense = {
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: 'This was last months rent'
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense
	}
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		...expenses,
		expense
	]);
});

test('Should edit an expense', () => {
	const note = 'adding a note';
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[0].id,
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[0].note).toBe(note);
});

test('Should not edit an expense if expense not found', () => {
	const note = 'adding a note';
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			note
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
	const expenseData = {
		id: '123',
		description: 'Rent',
		amount: 109500,
		createdAt: 1000,
		note: 'This was last months rent'
	};
	const action = {
		type: 'SET_EXPENSES',
		expenses: expenseData
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenseData);
});