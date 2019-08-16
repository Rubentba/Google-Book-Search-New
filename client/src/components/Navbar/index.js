import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchButton from '../SearchButton/index';
import SavedButton from '../SavedButton/index';
import { styled } from '@material-ui/styles';

const Nav = styled(Appbar)({
    backgroundColor: '#f5f5f5',
    border: 0,
    opacity: 1,
    margin: 0,
    padding: 0
});

function Navbar() {
    return (
        <div>
            <Nav position='static'>
                <Toolbar>
                    <a className='nav-link' href='/search'>Google Book Search</a>

                    <div style={{ position: 'absolute', right: 15 }}>
                        <SearchButton>
                            <a className='nav-link' href='/search'>Search</a>
                        </SearchButton>
                        <SavedButton>
                            <a className='nav-link' href='/saved'>Saved</a>
                        </SavedButton>
                    </div>
                </Toolbar>
            </Nav>
        </div>
    );
};

export default Navbar;
