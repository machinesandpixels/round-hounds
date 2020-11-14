import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col }from 'react-bootstrap';
import Item from '../components/Item';

const endPoint = '/api/v1/menu';

const HomeScreen = () => {
   const [menuItems, setMenu] = useState([]);

   useEffect(() => {
        const fetchMenu = async () => {
            const { data } = await axios.get(endPoint);
            setMenu(data);
        }

        fetchMenu();
   }, []);

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
