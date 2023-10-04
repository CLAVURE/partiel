import React from 'react';
import Header from '../components/Header';
import img from '../img/sky.jpg'

const Contacter = () => {
    return (
        <div>
            <Header title='Nous contacter' description="" url={img}/>
            <h2>Voici comment nous contacter</h2>
        </div>
    );
};

export default Contacter;