import React from 'react';
import {Container} from 'react-bootstrap';

export const Layout = (props)=>(
        <Container className="container">
            {props.children}
        </Container>
)
