import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './composants/Header/Header';
import Accueil from './pages/Accueil/Accueil';
import ProjetPage from './pages/Projet/ProjetPage';
import './indexStyle/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/My_Portfolio" element={<Accueil />} />
                <Route path="/My_Portfolio/:titleId" element={<ProjetPage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
