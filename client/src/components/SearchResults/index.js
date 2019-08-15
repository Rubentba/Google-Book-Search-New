import React from 'react';
import Thumbnail from '../Thumbnail';
import { Container, Row, Col } from '../Grid';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const ViewButton = styled(Button)({
    background: '#616161',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 36,
    padding: '0 30px'

});

export function SearchResults({ children }) {
    return <ul className="list-group">{children}</ul>;
};

export function Result({
    title,
    authors,
    description,
    image,
    link,
    Button

}) {
    return (
        <li className='list-group-item'>
            <Container>
                <Row>
                    <Col size='sm-4'>
                        <Thumbnail src={image} />
                    </Col>
                    <Col size='sm-8'>
                        <h3>Title: {title}</h3>
                        <h4>Author: {authors}</h4>
                        <p><h5>Description: </h5>{description}</p>
                        <ViewButton href={link}>View</ViewButton>
                        <Button />
                    </Col>
                </Row>
            </Container>
        </li>
    );
};