import React from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';

const Item = ({ item }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/menu/${item._id}`}>
                <Card.Img src={item.image} variant="top" />
            </a>
            <Card.Body>
                <a href={`/menu/${item._id}`}>
                    <Card.Title as="div">
                        <strong>{item.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <Rating
                        value={item.rating}
                        text={`${item.numReviews} reviews`}
                     />
                </Card.Text>
                <Card.Text as="h3">
                    ${item.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Item;
