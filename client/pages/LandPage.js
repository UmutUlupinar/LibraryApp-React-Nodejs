import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hoşgeldiniz</h1>
            <p>Yapmak istediğiniz işlemi seçin:</p>
            <button onClick={() => navigate('/add-book')}>Kitap Ekle</button>
            <button onClick={() => navigate('/list-books')}>Kitaplığa Git</button>
            <button onClick={() => navigate('/categorize')}>Kategorileri Düzenle</button>
        </div>
    );
}

export default LandPage;