import React from 'react';
import { Link } from 'react-router-dom';

function CategorizeLibraryModule() {
    return (
        <div>
            <h2>Kütüphane Kategorize Modülü</h2>
            <Link to="/" className="App-button">Ana Sayfaya Dön</Link>
        </div>
    );
}

export default CategorizeLibraryModule;