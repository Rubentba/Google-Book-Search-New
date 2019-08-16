import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

function Footer() {

    return (
        <AppBar position='static' style={{ top: 'auto', bottom: 0, backgroundColor: '#616161' }}>
            <Toolbar>
                <Typography style={{ position: 'absolute', right: '45%', textAlign: 'center' }}>
                    &#169; 2019 BookSearch
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer
