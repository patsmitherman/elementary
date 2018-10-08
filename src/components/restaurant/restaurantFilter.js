import React, { Component } from 'react';
import styles from './restaurantFilter.module.css';

class RestaurantFilter extends Component {
    filter = (e) => {
        this.props.filterFunc(!this.props.filtered);
    }

  render() {
    return (
      <div className={styles.wrapper}>
          <label htmlFor="premium" className={styles.label}>Show Premium Listings</label>
          <input id="premium" type="checkbox" onChange={this.filter} defaultChecked={!this.props.filtered}></input>
      </div>
    );
  }
}

export default RestaurantFilter;