export const restaurantsLoadedAction = (data) => dispatch => {
    dispatch({
     type: 'RESTAURANTS_LOADED_ACTION',
     data: data
    })
}