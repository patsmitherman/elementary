import restReducer from './restaurantReducer';

let testData = {
    restaurants: [
        {premium: "true"},
        {premium: "false"},
        {premium: "true"}
    ],
    cached: [
        {premium: "true"},
        {premium: "false"},
        {premium: "true"}
    ]
};

it('sets loading to true when passed RESTAURANTS_LOADING_ACTION', () => {
    let result = restReducer({}, {type: 'RESTAURANTS_LOADING_ACTION'});
    expect(result.loading).toBe(true);
});

it('sets loading to false when passed RESTAURANTS_LOADED_ACTION', () => {
    let result = restReducer({}, {type: 'RESTAURANTS_LOADED_ACTION'});
    expect(result.loading).toBe(false);
});

it('sets restaurants to data when passed RESTAURANTS_LOADED_ACTION', () => {
    let result = restReducer({}, {type: 'RESTAURANTS_LOADED_ACTION', data: '123'});
    expect(result.restaurants).toBe('123');
});

it('sets cached to data when passed RESTAURANTS_LOADED_ACTION', () => {
    let result = restReducer({}, {type: 'RESTAURANTS_LOADED_ACTION', data: '123'});
    expect(result.cached).toBe('123');
});

it('sets filtered to true when passed FILTER_ACTION with state.filtered set to false', () => {
    let result = restReducer({filtered: false}, {type: 'FILTER_ACTION'});
    expect(result.filtered).toBe(true);
});

it('filters test data when passed FILTER_ACTION with data set to true', () => {
    let result = restReducer(testData, {type: 'FILTER_ACTION', data: true});
    expect(result.restaurants.length).toBe(1);
});

it('returns test data unaltered when passed FILTER_ACTION with data set to false', () => {
    let result = restReducer(testData, {type: 'FILTER_ACTION', data: false});
    expect(result.restaurants.length).toBe(3);
});