import React from 'react';

function Thumbnail({ src }) {
    return (
        <div
            role='img'
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                paddingTop: '100%'
            }}
        />
    );
};

export default Thumbnail;