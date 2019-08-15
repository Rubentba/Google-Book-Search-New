import React from 'react';
import SearchButton from '../SearchButton';

const InputForm = (props) => (
    <div className='card'>
        <div className='card-header'>
            <h2>
                Search for a book
            </h2>
        </div>
        <div className='card-body'>
            <form>
                <div className='form-group'>
                    <p>What Book are you looking for...</p>
                    <input className='form-control'
                        name='searchBook'
                        type='text'
                        placeholder="Enter query here - Try Harry Potter"
                        value={props.search}
                        onChange={props.handleInputChange}
                    />
                </div>
                <SearchButton onClick={props.handleFormSubmit}>
                    Search
                </SearchButton>
            </form>
        </div>
    </div>
);

export default InputForm;