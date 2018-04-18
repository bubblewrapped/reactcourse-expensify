import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total.js';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
	<div>
		<p>Viewing {props.expenses.length} {props.expenses.length === 1 ? 'expense' : 'expenses'} totalling {numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpensesSummary);