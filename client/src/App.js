import React from 'react';
import { HashRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

// Import your pages
import AddBookModule from './pages/AddBookModule';
import ListBookModule from './pages/ListBookModule';
import CategorizeLibraryModule from './pages/CategorizeLibraryModule';

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Kitap Yönetim Sistemi</h1>
            <div>
              {/* Replace buttons with navigation Links */}
              <Link to="/add-book" className="App-button">Kitap Ekle</Link>
              <Link to="/list-books" className="App-button">Kitapları Listele</Link>
              <Link to="/categorize-library" className="App-button">Kategorileri Ayarla</Link>
            </div>
          </header>

          {/* Define Routes for the app */}
          <Routes>
            <Route path="/" element={<h2>Hoşgeldiniz! Ana Sayfa</h2>} />
            <Route path="add-book" element={<AddBookModule />} />
            <Route path="/list-books" element={<ListBookModule />} />
            <Route path="/categorize-library" element={<CategorizeLibraryModule />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;