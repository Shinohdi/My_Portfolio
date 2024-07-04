import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './composants/Header/Header';
import Accueil from './pages/Accueil/Accueil';
import ProjetPage from './pages/Projet/ProjetPage';
import './indexStyle/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/:titleId" element={<ProjetPage />} />
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
