import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col }from 'react-bootstrap';
import Item from '../components/Item';

import menuItems from '../menuItems';
const endPoint = 'http://localhost:5000/api/v1/menu';

const HomeScreen = () => {
   const [menu, setMenu] = useState([]);

   useEffect(() => {
        const fetchMenu = async () => {
            const { data } = await axios.get(endPoint);
            setMenu(menu);
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
