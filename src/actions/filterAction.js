export const filterAction = (isFiltered) => dispatch => {
    dispatch({
     type: 'FILTER_ACTION',
     data: isFiltered
    })
}