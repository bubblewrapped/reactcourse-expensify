import authReducers from '../../reducers/auth';

test('Should set uid on login', () => {
	const uid = '123456789';
	const state = authReducers(undefined, {type: 'LOGIN', uid});
	expect(state.uid).toBe(uid);
});

test('Should clear uid on logout', () => {
	const state = authReducers(undefined, {type: 'LOGOUT'});
	expect(state).toEqual({});
});