import { restaurantsLoadedAction } from './restaurantsLoadedAction';
import { restaurantsLoadingAction } from './restaurantsLoadingAction';

export function getRestaurantsAction() {
    return (dispatch) => {
        dispatch(restaurantsLoadingAction());

        fetch('http://5bb815b4504a110014a4fcea.mockapi.io/restaurants')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                dispatch(restaurantsLoadedAction(myJson));
            });
    };
}