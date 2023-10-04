import React from 'react';
import Header from '../components/Header';
import img from '../img/sky.jpg'

const Home = () => {
    return (
        <div>
            <Header title='Accueil' description="" url={img}/>
            <h2>Bienvenue sur mon site !</h2>

        </div>
    );
};

export default Home;