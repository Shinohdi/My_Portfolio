import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './composants/Header/Header';
import Accueil from './pages/Accueil/Accueil';
import Test from './pages/Test/Test';
import './indexStyle/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/My_Portfolio" element={<Accueil />} />
                <Route path="/My_Portfolio/test" element={<Test />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
