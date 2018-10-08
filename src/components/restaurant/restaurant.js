import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styles from './restaurant.module.css';

class Restaurant extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    toggleDetails = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <React.Fragment>
            {(this.props.isAuthed || this.props.premium === "false") && (
                <li key={this.props.id} className={styles.restaurant}>
                <Container>
                    <Row>
                        <Col md="10" className={styles.nameWrapper}>
                            <div className={styles.name}>{this.props.name} {this.props.premium === "true" && (<span className={styles.premium}>(premium listing)</span>)}</div>
                        </Col>
                        <Col md="2" className={styles.buttonWrapper}>
                            <Button outline color="primary" size="sm" className={styles.button} onClick={this.toggleDetails}>
                                {!this.state.open && ("show details")}
                                {this.state.open && ("hide details")}
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <div className={styles.rating}><span className={styles.label}>Rating:</span> {this.props.rating}/5</div>
                        </Col>
                        <Col md="6">
                            <div className={styles.price}><span className={styles.label}>Price range:</span> {this.props.price_range}</div>
                        </Col>
                    </Row>
                        
                    {this.state.open && (
                        <React.Fragment>
                            <Row className={styles.details}>
                            <Col md="2">
                                <span className={styles.label}>Cuisine:</span>
                            </Col>
                            <Col md="10">
                                <div className={styles.cuisine}> {this.props.cuisine}</div>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="2">
                                <span className={styles.label}>Features:</span>
                            </Col>
                            <Col md="10">
                                <div className={styles.features}>{this.props.features}</div>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="2">
                                <span className={styles.label}>description:</span>
                            </Col>
                            <Col md="10">
                                <div className={styles.description}>{this.props.description}</div>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="2">
                                <span className={styles.label}>Address:</span>
                            </Col>
                            <Col md="10">
                                <div className={styles.address}>{this.props.address}</div>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="2">
                                <span className={styles.label}>Phone:</span>
                            </Col>
                            <Col md="10">
                                <div className={styles.phone}>{this.props.phone}</div>
                            </Col>
                            </Row>
                        </React.Fragment>
                    )}
                </Container>
                </li>
            )}

            {(!this.props.isAuthed && this.props.premium === "true" ) && (
                <li key={this.props.id} className={styles.restaurant}>
                    <div className={styles.name}>{this.props.name}</div>
                    <div>Premium Restaurant - Please login to view</div>
                </li>
            )}
            </React.Fragment>
        )
    }
}

export default Restaurant; 