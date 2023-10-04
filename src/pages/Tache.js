import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import img from '../img/sky.jpg'

const Tache = () => {
    const {slug} = useParams();
    const [taches, setTaches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isResolved, setIsResolved] = useState(true);

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

    function completedOrNot(){
        if(taches[window.location.href.split('=')[1]].completed==true){
            return "Complétée";
        } else {
            return "Non complétée";
        }
    }
    
    // function modifTache(){
    //     let idTache = taches[window.location.href.split('=')[1]].id;
    //     let idUser = taches[window.location.href.split('=')[1]].userId;
    //     let newTache = document.querySelector('#titre').value;

    //     var tachesT = JSON.parse(localStorage.getItem("taches"));
        
    //     for (let i=0; i<tachesT.length; i++) {
    //         if (tachesT[i].id == parseInt(slug)) {
    //             tachesT.splice(i, 1);
    //             const newTach = {id: idTache, todo: newTache, completed: false, userId: idUser};
    //             const local = JSON.parse(localStorage.getItem("taches"));
    //             local.push(newTach);
    //             localStorage.setItem('taches', JSON.stringify(local));
    //             window.location.href = "/taches";
    //         }
    //     }
    // }
    
    function deleteTache(){
        var tachesT = JSON.parse(localStorage.getItem("taches"));
        
        for (let i=0; i<tachesT.length; i++) {
            if (tachesT[i].id == parseInt(slug)) {
                tachesT.splice(i, 1);
                window.location.href = "/taches";
            }
        }

        tachesT = JSON.stringify(tachesT);
        console.log(tachesT)

        localStorage.setItem("taches", tachesT);
    }

    return (
        <div>
            <Header title='Tâche' description="" url={img}/>
            <h2>Spécification d'une tâche</h2>
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
                <div className='infoTache'>
                    <p>
                        {taches[window.location.href.split('=')[1]].todo}
                    </p>
                    <p>
                        Statut : {completedOrNot()}
                    </p>
                </div>

                <div className='modifierTache'>
                    <h3>Modifier la tâche</h3>
                    {/* <form>
                        <div>
                            <label htmlFor='titre'>Nouveau titre : </label>
                            <input id='titre' type='text'/>
                        </div>
                        <button onClick={modifTache}>Modifier</button>
                    </form> */}
                    
                    <button onClick={deleteTache}>Supprimer</button>    
                </div>

                </>
            ) }
        </div>
    );
};

export default Tache;