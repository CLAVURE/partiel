import React from 'react';
import Header from '../components/Header';
import img from '../img/sky.jpg'

const Authentification = () => {
    return (
        <div>
            <Header title='Authentification' description="" url={img}/>
            <h2>Se connecter</h2>
            <form className='seConnecter'>
                <div>
                    <label htmlFor='nom'>Nom : </label>
                    <input type='text' id='nom' name='nom'/>
                </div>
                <div>
                    <label htmlFor='passw'>Mot de passe : </label>
                    <input type='password' id='passw' name='passw'/>
                </div>
            </form>
        </div>
    );
};

export default Authentification;