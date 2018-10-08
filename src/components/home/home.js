import React from 'react';
import { Jumbotron } from 'reactstrap';
import styles from './home.module.css';

const Home = () => {
    return (
      <div className={styles.wrapper}>
        <Jumbotron>
          <h1 className="display-4">Welcome to the Elementary Restaurant Listing</h1>
          <p className="lead">Be sure to login in order to view our premium listings!</p>
        </Jumbotron>
      </div>
    )
};

export default Home;