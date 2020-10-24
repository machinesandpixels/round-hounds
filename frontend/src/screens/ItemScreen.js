import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Button, Card, Col, Image, ListGroup, Row} from 'react-bootstrap';
import Rating from '../components/Rating';
import menuItems from '../menuItems';

const ItemScreen = ({ match }) => {
    const item = menuItems.find(item => item._id == match.params.id);
  
    return (
        <Fragment>
            <Link to="/" className="btn btn-light my-3"> Go Back</Link>
            <Row>
                <Col md={3}>
                    <Image src={item.image} alt={item.name} fluid>
                    </Image>
                </Col>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{item.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating 
                                value={item.rating} 
                                text={`${item.numReviews} reviews`} 
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${item.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Toppings: {item.toppings}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>
                                            ${item.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status
                                    </Col>
                                    <Col>
                                        {item.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type="button" disabled={item.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ItemScreen;
