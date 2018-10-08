const initialState = {restaurants: [], cached: [], loading: false, filtered: false};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RESTAURANTS_LOADED_ACTION':
      return {
        ...state,
        restaurants: action.data,
        cached: action.data,
        loading: false
      }

    case 'RESTAURANTS_LOADING_ACTION':
      return {
        ...state,
        loading: true
      }

    case 'FILTER_ACTION':
      return {
        ...state,
        restaurants: action.data === true ? state.restaurants.filter((res) => res.premium === "false") : state.cached,
        filtered: !state.filtered
      }

    default:
      return state
  }
}