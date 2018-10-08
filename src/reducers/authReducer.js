const initialState = {isAuthed: false};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGEDIN_ACTION':
      return {
        ...state, isAuthed: true
      }

    case 'LOGOUT_ACTION':
      return {
        ...state, isAuthed: false
      }

    default:
      return state
  }
}