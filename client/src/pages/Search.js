import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import InputForm from '../components/InputForm';
import { SearchResults, Result } from '../components/SearchResults';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

const SaveButton = styled(Button)({
    background: '#03a9f4',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 36,
    padding: '0 30px'

});

class Search extends Component {
    state = {
        books: [],
        bookInput: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.setState({ bookInput: event.target.value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    handleSavedButton = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            key: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(this.setState({ message: alert('Your book has been saved') }));
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Google Book Search</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size='xl-12'>
                            <InputForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <SearchResults>
                        {this.state.books.map(book => {
                            return (
                                <Result
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    link={book.volumeInfo.infoLink}
                                    authors={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    Button={() => (
                                        <SaveButton onClick={() => this.handleSavedButton(book.id)}>Save</SaveButton>
                                    )}
                                />
                            );
                        })}
                    </SearchResults>
                </Container>
            </div>
        );
    };
};

export default Search;