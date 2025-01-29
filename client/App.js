import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandPage from './pages/LandPage';
import AddBookPage from './pages/AddBookPage';
import ListBookPage from './pages/ListBookPage';
import CategorizePage from './pages/CategorizePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    {/* Ana giriş sayfası */}
                    <Route path="/" element={<LandPage />} />
                    {/* Kitap ekleme sayfası */}
                    <Route path="/add-book" element={<AddBookPage />} />
                    {/* Kitap listeleme sayfası */}
                    <Route path="/list-books" element={<ListBookPage />} />
                    {/* Kategorileri düzenleme sayfası */}
                    <Route path="/categorize" element={<CategorizePage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;