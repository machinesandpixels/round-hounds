import React, { Fragment } from 'react';
import { Row, Col }from 'react-bootstrap';
import Item from '../components/Item';
import menuItems from '../menuItems';

const HomeScreen = () => {
    return (
        <Fragment>
            <h2 className="text-center">Menu</h2>
            <Row>
                {menuItems.map(item => (
                    <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                       <Item item={item} />
                    </Col>
                ))}
            </Row>
        </Fragment>
    )
}

export default HomeScreen;
