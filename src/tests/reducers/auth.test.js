import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual('123');
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '123' }, action);
    expect(state.uid).toBeFalsy();
});
