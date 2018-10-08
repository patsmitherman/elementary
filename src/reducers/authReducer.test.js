import authReducer from './authReducer';

it('sets isAuthed to true when passed LOGGEDIN_ACTION', () => {
    let result = authReducer({}, {type: 'LOGGEDIN_ACTION'});
    expect(result.isAuthed).toBe(true);
});

it('sets isAuthed to false when passed LOGOUT_ACTION', () => {
    let result = authReducer({}, {type: 'LOGOUT_ACTION'});
    expect(result.isAuthed).toBe(false);
});

it('returns the passed in state when it does not match action type', () => {
    let result = authReducer({value: '123'}, {type: 'BOGUS_ACTION'});
    expect(result.value).toBe('123');
});