import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css"
import Nav from './components/Nav';
import ListeTaches from './pages/ListeTaches';
import Tache from './pages/Tache';
import Contacter from './pages/Contacter';
import Authentification from './pages/Authentification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/taches" element={<ListeTaches/>}/>
        <Route exact path="/taches/:slug" element={<Tache/>}/>
        <Route exact path="/contact" element={<Contacter/>}/>
        <Route exact path="/auth" element={<Authentification/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
