import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Spinner } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img from '../img/sky.jpg'

const ListeTaches = () => {
    const [taches, setTaches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let i=0;
    
    useEffect(()=>{
        if(localStorage.getItem('taches')!=null){
            setTaches(JSON.parse(localStorage.getItem('taches')))
            setIsLoading(false);

        } else {

            axios.get('https://dummyjson.com/todos')
            .then(res => {
                setTaches(res.data.todos);
                localStorage.setItem('taches', JSON.stringify(res.data.todos))
                setIsLoading(false);
            })
        }
        
    }, [])

    function sendTache(){
        // Je créer ma constante newTache contenant ma nouvelle tache, et  ma constante local qui contient la liste des taches
        const newTache = {id: taches.length+1, todo: document.querySelector('#titre').value, completed: false, userId: 99};
        const local = JSON.parse(localStorage.getItem("taches"));

        // J'ajoute ma nouvelle tache dans la liste des taches puis je met à jour mon local storage avec la nouvelle liste
        local.push(newTache);
        localStorage.setItem('taches', JSON.stringify(local));
    }
    
    return (
        <div>
            <Header title='Liste des tâches' description="" url={img}/>
            <h2>Voici la liste des tâches</h2>

            {isLoading ? (
                <>
                <Spinner type="grow"
                    className="m-5"
                    color="primary"
                    style={{
                        height: '5rem',
                        width: '5rem'
                      }}
                    >
                Loading...
                </Spinner>
                </>
            ) : (
                <>
                <div className='container'>
                {taches.map((tache)=>(
                          <div className='todoOne'>
                            <p>
                                {tache.todo}
                            </p>
                            <Link key={tache.id} to={'/taches/'+tache.id+"?v="+i}>Détail</Link>
                            <div className='none'>{i++}</div>
                            
                          </div>
                        ))}
                </div>
                <h3>Ajouter une tâche</h3>

                    <form onSubmit={sendTache} className='ajouterTache'>
                        <div>
                            <label htmlFor='titre'>Titre de la tâche&nbsp;</label>
                            <input id='titre' name='titre' type='text'/>
                        </div>
                        <input className='envoi' type='submit'/>
                    </form>  
                    
                </>
            ) }
        </div>
    );
};

export default ListeTaches;