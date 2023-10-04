import React from 'react';

const Header = ({title, description, url}) => {
    return (
        <header style={{backgroundImage: `url(${url})`}}>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
};

export default Header;