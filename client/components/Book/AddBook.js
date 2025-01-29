import React, { useState } from 'react';

function AddBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Kitap Eklendi:', { title, author });
        setTitle('');
        setAuthor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Kitap Başlığı"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Yazar"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Kitap Ekle</button>
        </form>
    );
}

export default AddBook;