import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './restaurant';
import RestaurantFilter from './restaurantFilter';
import { getRestaurantsAction } from '../../actions/getRestaurantsAction';
import { filterAction } from '../../actions/filterAction';
import styles from './restaurants.module.css';


class Restaurants extends Component {

  componentWillMount() {
    this.props.getRestaurantsAction();
  }

  restaurantsList() {
    const restaurants = this.props.restaurants;
    const listItems = restaurants.map((res) => {
      return (<Restaurant key={res.id} {...res} isAuthed={this.props.isAuthed}/>)
    });
    return (
      <ul className={styles.list}>{listItems}</ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loading && (
          <div>
            <span className={styles.loadingText}>Loading Restaurants...</span>
            <img src="./assets/loading.gif" alt="loading" className={styles.loader}></img>
          </div>
        )}
        
        {!this.props.loading && (
          <div className={styles.wrapper}>
            <RestaurantFilter filtered={this.props.filtered} filterFunc={this.props.filterAction} />
            { this.restaurantsList() }
          </div>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthed: state.authReducer.isAuthed,
    restaurants: state.restaurantReducer.restaurants,
    loading: state.restaurantReducer.loading,
    filtered: state.restaurantReducer.filtered
  }
}

const mapDispatchToProps = dispatch => ({
  getRestaurantsAction: () => dispatch(getRestaurantsAction()),
  filterAction: (isFiltered) => dispatch(filterAction(isFiltered))
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);