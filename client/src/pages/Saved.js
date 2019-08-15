import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Container } from '../components/Grid';

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBook()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err));
    };

    handleDeleteBook = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Saved Books</h1>
                </Jumbotron>
                <Container>
                </Container>
            </div>
        );
    };
};

export default Saved;