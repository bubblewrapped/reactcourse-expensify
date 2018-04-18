import React from 'react';
import ReactDOM from 'react-dom'; 
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter, sortByAmount} from './actions/filters';
import getVisisbleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

/*store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});*/

store.dispatch(addExpense({description: 'Water Bill', amount: 40000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 20000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500,}));

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));